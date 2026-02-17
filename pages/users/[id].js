import { MainContainer } from "../../components/MainContainer";
import styles from "../../styles/User.module.scss";

export default function ({ user }) {
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User with id {user.id}</h1>
        <div>{user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
