import { useIntl } from 'react-intl';
import { messages } from './messages';
import Input from '../form-elements/input';
import Button from '../ui/button';
import Modal from '../ui/modal/modal';
import ModalBody from '../ui/modal/modal-body';
import { createRef, useEffect, useState } from 'react';
import { Subject, takeUntil, scan, finalize } from 'rxjs';
import { fromFetchStream } from '../../api/from-fetch-stream';
import SpinnerCircle from '../ui/spinner/spinner-circle';

interface LapisData {
  id: number;
  name: string;
  description: string;
  image: string;
  code: string;
}
const SearchForm = () => {
  const t = useIntl();
  const inputRef = createRef<HTMLInputElement>();
  const [searchModal, showSearchModal] = useState<boolean>(false);

  const [code, setCode] = useState<string>('');
  const [data, setData] = useState<LapisData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [stopSource, setstopSource] = useState(new Subject());

  useEffect(() => {
    if (code.length > 0) {
      setData([]);
      setLoading(true);
      const fetchData = fromFetchStream<LapisData>(
        process.env.REACT_APP_WEBAPI_API +
          '/Search/Code?code=' +
          encodeURIComponent(code)
      ).pipe(
        takeUntil(stopSource),
        scan((all, item) => [...all, item], [] as LapisData[]),
        finalize(() => {
          setLoading(false);
        })
      );

      const subscription = fetchData.subscribe(setData);

      return () => subscription.unsubscribe();
    }
  }, [code]);

  return (
    <div className="pl-3">
      <div
        onClick={() => showSearchModal(true)}
        className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center hidden md:flex"
      >
        <Input
          disabled={searchModal}
          id="search"
          type="tel"
          name="search"
          placeholder={t.formatMessage({ ...messages.search })}
          customStyle="nofocus"
          className="w-[15.625rem] border-0 bg-transparent pl-6 rounded-full bg-gray-200 "
        />
        <Button
          className="bg-primary-400 hover:bg-primary-400 focus:bg-primary-400 border-0"
          shape="ellipse"
          size="lg"
          iconButton
          disabled={searchModal}
        >
          <i className="fa fa-search"></i>
        </Button>
      </div>
      <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center md:hidden">
        <Button
          className="bg-primary-400 hover:bg-primary-400 focus:bg-primary-400 border-0"
          shape="ellipse"
          size="lg"
          iconButton
          onClick={() => showSearchModal(true)}
        >
          <i className="fa fa-search" />
        </Button>
        <div />
        <Modal
          className={'pt-[3.45rem] overflow-scroll'}
          centered={false}
          show={searchModal}
          onClose={() => showSearchModal(false)}
          onEntering={() => {
            inputRef.current?.focus();
          }}
        >
          <ModalBody>
            <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center flex">
              <Input
                type="tel"
                ref={inputRef}
                id="search-modal"
                name="search"
                placeholder="xxx,xxx,xxx,xxx"
                customStyle="nofocus"
                className="w-11/12 border-0 bg-transparent  rounded-full bg-gray-200"
                onChange={(event) => setCode(event.target.value)}
              />
              <Button
                className="bg-primary-600 hover:bg-primary-400 focus:bg-primary-400 border-0"
                shape="ellipse"
                size="lg"
                iconButton
              >
                {loading === true ? (
                  <SpinnerCircle />
                ) : (
                  <i className="fa fa-search"></i>
                )}
              </Button>
            </div>
            <div>
              {
                data.length > 0 ? (
                  data.map((item) => {
                    return (
                      <div key={item.id} className=" grid grid-cols-4 py-4">
                        <img
                          src="https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305930899_5997173090293006_823830225743787113_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=f4VMkhScKKgAX8GgyCA&_nc_ht=scontent-prg1-1.xx&oh=00_AT83ezFHEkardChgqkahzaYMhjY3eB4t_3REzMruDvu6zA&oe=631E4754"
                          alt={item.name}
                        />
                        <div className="px-2 py-2 col-span-3 border border-geyser">
                          <h6>{item.code}</h6>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )
                /*loading === false ? (<div className="h-60 grid grid-cols-4 py-4">
                                <div>:(</div>
                                <div className="px-2 py-2 col-span-3 border border-geyser">                                   
                                    <h4>Nebylo nic nalezeno</h4>
                                    <p>{}</p>
                                </div>
                            </div>) : <></> */
              }
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default SearchForm;
