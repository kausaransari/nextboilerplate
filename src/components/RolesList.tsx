type rolesData = {
  id: Number;
  name: string;
};

const roleList = ({ id, name }: rolesData) => {
  return <li key={`${id}`}>{name}</li>;
};

export default roleList;
