export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center p-4 text-xs">
      <p>&copy; Copyright Chris Williams {date}</p>
    </footer>
  );
}
