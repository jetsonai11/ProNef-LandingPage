
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Discover NFTs and Start Growing Your Collections."
        description="Buy, store, collect & exchange NFTs, and earn crypto. Join 25+ million people using the ProNef Marketplace app."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Beautiful and smart User Interface"
        description="Experience a gorgeous and fluent UI on the ProNef NFT Marketplace app"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Mobile Deployment"
        description="ProNef is deployed using Expo, a platform for making universal native apps for Android, IOS, and the web with JavaScript and React."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="App Demo"
        description="The app contains two pages that transition seemlessly. The first page lists all NFTs availble while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Zhaobang Wu</span>
        </p>
      </div>
    </>
  );
}

export default App;
