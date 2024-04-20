import { Helmet } from "react-helmet-async";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
};

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to the phone book</h1>
      </div>
    </div>
  );
};

export default HomePage;
