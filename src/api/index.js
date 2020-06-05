export const grabRandomUsers = async () => {
  const resp = await fetch('
  https://randomuser.me/api
  ');
  return resp.json();
};
