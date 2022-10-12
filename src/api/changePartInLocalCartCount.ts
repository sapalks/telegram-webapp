export const changePartInLocalCartCount = async (_options: {
  // chatId: string,
  // applicationId:string,
  id: string,
  quantity: number,
}): Promise<boolean> => {
  const promise = new Promise((res) => {
    setTimeout(() => res({
      status: 'ok',
    }), 500);
  });

  const { status } = (await promise) as { status: string };

  return status === 'ok';
};
