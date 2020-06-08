export const grabRandomUsers = async () => {
  const resp = await fetch("https://randomuser.me/api").then((resp) =>
    resp.json()
  );
};
