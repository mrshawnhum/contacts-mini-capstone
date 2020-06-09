export const grabContactList = async (index = 3) => {
  const res = await fetch(`https://randomuser.me/api/?results=${index}`);
  return res.json();
};
