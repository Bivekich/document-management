function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p>
          <a href="/oferta" className="underline">
            Оферта
          </a>{' '}
          |{' '}
          <a href="/rules" className="underline">
            Правила сайта
          </a>{' '}
          |{' '}
          <a href="/contacts" className="underline">
            Контакты
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
