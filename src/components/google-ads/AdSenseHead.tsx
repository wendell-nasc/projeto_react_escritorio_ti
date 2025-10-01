// components/AdSenseHead.tsx
import { Helmet } from 'react-helmet-async';

const AdSenseHead = () => {
  return (
    <Helmet>
      <script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1012339402693819"
        crossOrigin="anonymous"
      />
      <meta name="google-adsense-account" content="ca-pub-1012339402693819" />
    </Helmet>
  );
};

export default AdSenseHead;