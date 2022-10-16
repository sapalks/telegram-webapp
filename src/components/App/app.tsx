// Хорошей практикой считается называеть реакт компоненты с большой буквы
// и использовать CamelCase в названии компонентов
// с 17 реакта его можно не импортить если в eslint убрать правило
import React from 'react';
import { Provider } from 'react-redux';

import { Basket } from 'components/Basket/Basket';
import { Catch } from 'components/Catch';
import { GlobalViewportHeight } from 'components/GlobalViewportHeight';
import { withTelegramWebApp } from 'components/Telegram';

import { store } from 'store/index';

import './style.less';

function App() {
  return (
    <Provider store={store}>
      <Basket orderId="orderId from bot" />
      <GlobalViewportHeight />
    </Provider>
  );
}
async function validateHash() {
  return true;
}

export default Catch(
  withTelegramWebApp(App, {
    validateHash,
  }),
);

// export default App;
