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
import { SearchItem } from '../../api/types/search';
import Anchor from '../ui/anchor';
import Image from '../ui/image';

const SearchForm = () => {
  const t = useIntl();
  const inputRef = createRef<HTMLInputElement>();
  const [searchModal, showSearchModal] = useState<boolean>(false);

  const [code, setCode] = useState<string>('');
  const [data, setData] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [stopSource, setstopSource] = useState(new Subject());

  useEffect(() => {
    if (code.length > 0) {
      setData([]);
      setLoading(true);
      const fetchData = fromFetchStream<SearchItem>(
        process.env.REACT_APP_WEBAPI_API +
          '/Search/Code/' +
          encodeURIComponent(code)
      ).pipe(
        takeUntil(stopSource),
        scan((all, item) => [...all, item], [] as SearchItem[]),
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
                      <Anchor
                        key={item.id}
                        path={'lapis/' + item.id}
                        className=" grid grid-cols-4 py-4"
                      >
                        <Image path={item.image.path} />
                        <div className="px-2 py-2 col-span-3 border border-geyser">
                          <h6>{item.code}</h6>
                          <h4>{item.name}</h4>
                          {/*<p>{item.description}</p>*/}
                        </div>
                      </Anchor>
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
