import React, {useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import LiveStreamPlayer from "../components/LiveStreamPlayer";


const LiveStream = () => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language; // 'en' or 'ar'

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } 
  }, []);
  return (
    <div>
      <Helmet>
        <title>
        </title>
      </Helmet>
      <LiveStreamPlayer />
    </div>
  );
};

export default LiveStream;
