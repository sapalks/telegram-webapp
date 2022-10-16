// Аналогично с getOrders
export const getWorkerInfo = async (): Promise<boolean> => {
  const promise = new Promise((res) => {
    setTimeout(() => res({
      status: 'ok',
      body: {
        createdAt: 1612872010538,
        isDeleted: false,
        id: 'c7e8c84b-c1e5-46cf-adb8-d976fbb7ab7c',
        chatId: '439037132',
        accessRules: [
          'receive_report_by_my_request', 'receive_report_by_my_cars',
          'collect_order_by_my_request', 'collect_order_by_my_cars',
          'pay_for_the_order_by_my_request', 'pay_for_the_order_by_my_cars',
        ],
        companyId: 'e6542ee1-3add-476f-848d-7a61667f9c49',
        accountUserId: '03fd9e7a-50ef-4a8d-bd7c-636e7e64f518',
        applicationId: '217b9b38-63c3-400f-93d7-39a5c7e9fe97',
        accountUser: {
          createdAt: 1612872010538,
          isDeleted: false,
          id: '03fd9e7a-50ef-4a8d-bd7c-636e7e64f518',
          phone: '79093598276',
          name: 'Алексей Сапунков',
          accountId: 'b71810de-d790-412f-80f0-30b1da74bf3a',
        },
        company: {
          createdAt: 1607088397613,
          isActive: true,
          appVersion: 'v2-mono-with-client',
          willUseSmartPricing: true,
          autoRenewalType: 'monthly',
          autoRenewalCount: 5,
          defaultDeliveryType: 'standard',
          allowToShowArticles: true,
          allowToShowDistributorBtn: false,
          allowToShowSearchImagesLink: true,
          id: 'e6542ee1-3add-476f-848d-7a61667f9c49',
          name: 'ООО Тест',
          phones: [],
          cityId: '395c613d-22b9-40ab-b436-f3c50e7bd188',
          minDifferenceBetweenPrioritizedAndLowPricedItem: null,
          commission: 2.5,
          willCheckExternalPayments: null,
          externalPaymentsLastCheckedAt: null,
          availableOfRequestsNumber: null,
          accountId: 'b71810de-d790-412f-80f0-30b1da74bf3a',
          applicationId: '217b9b38-63c3-400f-93d7-39a5c7e9fe97',
          commentToOffer: '✅ Гарантия на запчасти до года\n💰 Скидка 10% на установку\n🛡 Защита от подделок\n⚙️ Удобно. Не нужно искать и ехать за запчастями\n🔥 Выгодная цена и скидки (работаем напрямую с поставщиками)',
          type: 'service-station',
          currency: 'kz',
          account: {
            createdAt: 1607088397613, isDeleted: false, id: 'b71810de-d790-412f-80f0-30b1da74bf3a', name: 'ООО Тест',
          },
          providers: [{
            createdAt: 1607087548738, isDeleted: false, id: 'e6542ee1-3add-476f-848d-7a61667f9c49', externalId: '22d2f726-9a46-48d3-b0e6-cd85521f072e', providerType: 'qwep', companyId: 'e6542ee1-3add-476f-848d-7a61667f9c49',
          }],
        },
      },
    }), 500);
  });

  const { body } = (await promise) as { body: any };

  return body;
};
