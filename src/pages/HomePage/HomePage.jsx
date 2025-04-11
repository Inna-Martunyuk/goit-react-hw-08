const styles = {
  container: {
    backgroundColor: "#f9f9f9", 
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    color: "#333", 
    textAlign: "center",
    boxShadow: "inset 0 0 60px rgba(0,0,0,0.1)", 
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00bcd4",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "500px",
  },
};

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to your Task Manager{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p style={styles.subtitle}>
          Organize your day, stay productive, and achieve more!
        </p>
      </div>
    </>
  );
}
