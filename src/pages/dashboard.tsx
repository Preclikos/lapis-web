import Layout from '../layout';
import PageHeader from '../components/page-header';
import { useIntl } from 'react-intl';
import { menuMessages } from '../data/menuMessages';
import SEO from '../components/seo';
import PostCard from '../components/post-card';

const Dashboard = () => {
  const t = useIntl();

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[{ text: t.formatMessage({ ...menuMessages.home }), path: '/' }]}
        currentPage={t.formatMessage({ ...menuMessages.dashboard })}
        title={t.formatMessage({ ...menuMessages.dashboard })}
      />

      <div className=" gap-8 columns-2xs">
        <div className="inline-block mb-4">
          <PostCard
            title={'Nahlasil novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/131273260_10218550013368020_3840312457061816031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M8yomtEYJlEAX89FqW8&_nc_ht=scontent-prg1-1.xx&oh=00_AT_IYFgf9j7VS0xRxh38j6aRKjmpf0KBGf-6suSWs3bO-w&oe=633FCDB6',
                alt: undefined,
              },
              name: 'Preclikos Husák',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 5. minutama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305930899_5997173090293006_823830225743787113_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=f4VMkhScKKgAX8GgyCA&_nc_ht=scontent-prg1-1.xx&oh=00_AT83ezFHEkardChgqkahzaYMhjY3eB4t_3REzMruDvu6zA&oe=631E4754',
                alt: undefined,
              },
              title: 'Jedna',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedalekjeme pinek nedalekjeme pinek nedalekjeme pinek nedalekjeme pinek nedalekjeme pinek pinek nedalekjeme pinek nedalekjeme poaleko Noveho brodu, dekujeme poho brodu, dekujeme posuneme dal.',
            }}
          />
        </div>

        <div className="inline-block mb-4">
          <PostCard
            title={'Nahlasil novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/55865112_2850827104935056_1322842037313077248_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l2sP-W29XnMAX_qKoIB&_nc_ht=scontent-prg1-1.xx&oh=00_AT_OaBLU0aKUF8NLP_D10kG58UwbnKK5IQ338cWnAFsfAw&oe=6341779E',
                alt: undefined,
              },
              name: 'Marie Langrová',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 30. minutama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306527926_1697836850597305_3571544960524192567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=tLbx3d5tAXoAX91xkjw&_nc_ht=scontent-prg1-1.xx&oh=00_AT9WwBtQ6bZMvlbRgdDwrynRAzctv7AsmlGjL5zbKaxygA&oe=63227E2A',
                alt: undefined,
              },
              title: 'Dva',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedaleko Noveho brodu, dekujeme posuneme dal.',
            }}
          />
        </div>

        <div className="inline-block mb-4">
          <PostCard
            title={'Nahlasila novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/125527990_4533821043299139_4309680603481955445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ES0W-qoG1ZoAX8lVm96&_nc_ht=scontent-prg1-1.xx&oh=00_AT-SJwsO3IRE6fXyrg6CuzT8Rpc3wZ-_OoGinVY6YrmODQ&oe=634419DA',
                alt: undefined,
              },
              name: 'Kristýna Kovářová',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 4. hodinama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306271291_5471494146263184_3477857215802059199_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=FIe3fFQ-9icAX993Cuy&_nc_ht=scontent-prg1-1.xx&oh=00_AT8UnmS2JvsHBV35pJgU11grpzHlREGMElhDwHHV62_4Hg&oe=6321528A',
                alt: undefined,
              },
              title: 'Tri',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedaleko Novehoaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme po brodu, dekujeme posuneme dal.',
            }}
          />
        </div>

        <div className="inline-block mb-4">
          <PostCard
            title={'Nahlasil novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/12068408_10205463497652927_7978865435089464222_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4A3qOGu2Hy8AX_8csAD&_nc_oc=AQleGjpxw3_JShWzsVEGTa97YErnwp2fE9HtIiwWeXTHEVj_mC4Z-NneUbMgwTmxYFQ&tn=RkJAGpiN1nTrpekT&_nc_ht=scontent-prg1-1.xx&oh=00_AT-fTdG3I3IN5dKjcgbWppAjvKZ6PaAkSIRc2ojtqSCN8w&oe=63435E2A',
                alt: undefined,
              },
              name: 'Petr Husák',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 6. hodinama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305834924_10225275473107832_8694465417712094376_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=X4boR5myNTYAX8VqdSy&_nc_ht=scontent-prg1-1.xx&oh=00_AT9GPe4yrwxPzMldjpPKX7vRqss8QNii5dKsXOagJ0-7QQ&oe=63234085',
                alt: undefined,
              },
              title: 'Ctyri',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme poaleko Noveho brodu, dekujeme posuneme dal.',
            }}
          />
        </div>

        <div className="inline-block mb-4">
          <PostCard
            title={'Nahlasil novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/274614062_4960869104001841_2121471793839880380_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6NBtLlfQO_MAX9xazy-&_nc_ht=scontent-prg1-1.xx&oh=00_AT_5IreiV5woKQySjtHEOje41yUhnl_QLXSuRga4nJRCnA&oe=632243EE',
                alt: undefined,
              },
              name: 'Kateřina Duff',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 12. hodinama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306573285_10222842792918312_460568937552844605_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=xxcx7ahnVSQAX91W7tF&tn=RkJAGpiN1nTrpekT&_nc_ht=scontent-prg1-1.xx&oh=00_AT_Ac7Qrq-3rOznh9dYog6FTd93hNEEIWBVZCoFZwerIBQ&oe=632246ED',
                alt: undefined,
              },
              title: 'Pet',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedaleko Noveho brodu, dekujeme posuneme dal.',
            }}
          />
        </div>

        <div className="inline-block">
          <PostCard
            title={'Nahlasil novou polohu'}
            user={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/131273260_10218550013368020_3840312457061816031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M8yomtEYJlEAX89FqW8&_nc_ht=scontent-prg1-1.xx&oh=00_AT_IYFgf9j7VS0xRxh38j6aRKjmpf0KBGf-6suSWs3bO-w&oe=633FCDB6',
                alt: undefined,
              },
              name: 'Preclikos Husák',
              path: '/profile/nejakyid',
              designation: 'Czech - Guru',
              lastActivity: 'Pred 5. hodinama',
            }}
            activity={{
              image: {
                src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305930899_5997173090293006_823830225743787113_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=f4VMkhScKKgAX8GgyCA&_nc_ht=scontent-prg1-1.xx&oh=00_AT83ezFHEkardChgqkahzaYMhjY3eB4t_3REzMruDvu6zA&oe=631E4754',
                alt: undefined,
              },
              title: 'Sifon s Vodou',
              path: '/lapis/nejakyid',
              excerpt:
                'Krasny kaminek nedaleko Noveho brodu, dekujeme posuneme dal.',
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
