import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAppVersion } from 'store/app/selectors';
import { AppVersion } from 'store/model/worker';

import './style.less';
import { BasketApproveNotImplemented, BasketApproveV2MonoWithClient } from './versions';

export function BasketApprove() {
  const appVersion = useSelector(getAppVersion);
  const approveByVersion = useCallback(() => {
    switch (appVersion) {
      case AppVersion.V2MonoWithClient:
        return <BasketApproveV2MonoWithClient />;
      default:
        return <BasketApproveNotImplemented />;
    }
  }, [appVersion]);

  return <>{approveByVersion()}</>;
}
