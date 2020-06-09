export const grabContactList = async (index = 4) => {
  const res = await fetch(`https://randomuser.me/api/?results=${index}`);
  return res.json();
};
