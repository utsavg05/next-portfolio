export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-4xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
      <p>
        &copy; {year} Developed with{" "}
        <span className="text-red-500">&hearts;</span> by Utsav Gupta
      </p>
    </footer>
  );
}
