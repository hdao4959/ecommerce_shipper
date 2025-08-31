import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("Có phiên bản mới, tải lại chứ?")) {
      updateSW();
    }
  },
  onOfflineReady() {
    console.log("App đã sẵn sàng để chạy offline");
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer draggable newestOnTop={true}/>

  </StrictMode>,
)
