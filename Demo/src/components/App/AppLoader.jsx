/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { ProviderWrapper as LanguageProviderWrapper } from "contexts/LanguageContext.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App />
 
      </LanguageProviderWrapper >
  )
}
