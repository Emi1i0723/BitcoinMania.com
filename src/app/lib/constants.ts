export const CRYPTO_PRICES = {
  BTC: { name: 'Bitcoin', symbol: 'BTC', price: 65000, color: '#F7931A' },
  ETH: { name: 'Ethereum', symbol: 'ETH', price: 3500, color: '#627EEA' },
  SOL: { name: 'Solana', symbol: 'SOL', price: 140, color: '#14F195' },
};

export const EXCHANGE_RATES = {
  USD_TO_MXN: 17.50,
};

export const EDU_TOPICS = {
  basics: [
    { id: 'what-is-crypto', en: 'What is a Cryptocurrency?', es: '¿Qué es una Criptomoneda?' },
    { id: 'best-cryptos', en: 'Best Cryptos in current market', es: 'Las mejores criptomonedas del mercado actual' },
    { id: 'pros-cons', en: 'Pros and Cons of Crypto world', es: 'Ventajas y desventajas del mundo Crypto' },
    { id: 'exchange-vs-wallet', en: 'Differences: Exchange vs Wallet', es: 'Diferencias entre un Exchange y una wallet' },
  ],
  news: [
    { id: 'bitcoin-2026', en: 'Future of Bitcoin in 2026', es: 'Futuro del Bitcoin en el 2026' },
    { id: 'price-tracking', en: 'Where to track prices?', es: '¿Dónde ver el precio de Bitcoin y de las nuevas cryptomonedas?' },
  ]
};

export const STATIC_EDU_CONTENT: Record<string, { explanation: string, analogies: string[], flashcards: { question: string, answer: string }[] }> = {
  'what-is-crypto': {
    explanation: "Es una forma de dinero digital descentralizado que utiliza la criptografía (matemáticas avanzadas) para garantizar transacciones seguras. A diferencia del peso mexicano o el dólar, no dependen de un banco central o un gobierno; funcionan mediante una red de computadoras global que valida cada movimiento, asegurando que nadie pueda falsificarlas o gastar el mismo dinero dos veces.\n\nDebes tener en cuenta que antes de iniciar tu emprendimiento en el mundo cripto, te recomendamos que tengas en suma consideración que el monto invertido SIEMPRE sea dinero que no necesites o que no forme parte del capital económico que utilices para subsistir.",
    analogies: [
      "Es como un libro contable digital que todos pueden ver pero nadie puede borrar.",
      "Como el oro, pero digital y fácil de enviar a cualquier parte del mundo instantáneamente."
    ],
    flashcards: [
      { question: "¿Las criptomonedas dependen de un banco central?", answer: "No, son descentralizadas y funcionan mediante una red global." },
      { question: "¿Qué tecnología garantiza la seguridad de las transacciones?", answer: "La criptografía (matemáticas avanzadas)." },
      { question: "¿Qué recomendación de inversión sugiere Cryptomania?", answer: "Invertir solo dinero que no necesites para subsistir." }
    ]
  },
  'best-cryptos': {
    explanation: "Invertir en divisas menos conocidas te pondrá en una mayor posición de riesgo. En Criptomania.com nos enfocamos en las tres más robustas:\n\n1. Bitcoin (BTC) – El Oro Digital: Reserva de valor con suministro limitado a 21 millones.\n2. Ethereum (ETH) – La Computadora Global: Plataforma para Contratos Inteligentes y apps descentralizadas.\n3. Solana (SOL) – La Red de Alta Velocidad: Eficiencia extrema procesando miles de transacciones por segundo a costo casi nulo.",
    analogies: [
      "Bitcoin es el oro; Ethereum es el internet programable; Solana es la autopista de alta velocidad.",
      "Son la 'trinidad de la madurez criptográfica' por su seguridad, versatilidad e innovación."
    ],
    flashcards: [
      { question: "¿Cuál es el suministro máximo de Bitcoin?", answer: "21 millones de unidades." },
      { question: "¿Qué permite crear Ethereum además de su moneda?", answer: "Contratos Inteligentes y aplicaciones descentralizadas (dApps)." },
      { question: "¿Por qué destaca Solana en el mercado?", answer: "Por su capacidad de procesar transacciones a alta velocidad y bajo costo." }
    ]
  },
  'pros-cons': {
    explanation: "Ventajas:\n1. Descentralización: Tu dinero te pertenece al 100%.\n2. Transparencia: Blockchain es verificable por todos.\n3. Acceso 24/7: El mercado nunca cierra.\n4. Escasez: Diseñadas para ser deflacionarias.\n5. Inclusión: Solo necesitas celular e internet.\n\nDesventajas:\n1. Volatilidad: Precios cambian drásticamente rápido.\n2. Irreversibilidad: Si pierdes tus claves, pierdes el dinero.\n3. Seguridad: Riesgos de phishing y hackeos.\n4. Regulación: Incertidumbre legal en algunos países.\n5. Aprendizaje: Requiere entender redes y tecnología.",
    analogies: [
      "Es como ser tu propio banco: libertad total pero responsabilidad absoluta.",
      "La volatilidad es una montaña rusa financiera que requiere mentalidad de acero."
    ],
    flashcards: [
      { question: "¿Qué sucede si envías cripto a una dirección equivocada?", answer: "La transacción es irreversible y el dinero se pierde para siempre." },
      { question: "¿Por qué Bitcoin se considera deflacionario?", answer: "Porque tiene un límite de emisión programado, a diferencia del dinero tradicional." },
      { question: "¿El mercado cripto tiene horarios de cierre?", answer: "No, es accesible las 24 horas, los 7 días de la semana." }
    ]
  },
  'exchange-vs-wallet': {
    explanation: "Exchange (La Casa de Cambio): Plataforma para comprar/vender cripto con dinero local. Ellos custodian tus activos (Ej: Bitso, Binance).\n\nWallet (Tu Billetera Personal): Herramienta para poseer realmente tus activos. Tú controlas las 'Frases de Recuperación'.\n\nTipos:\n- Hot Wallets: Apps conectadas a internet (MetaMask, Phantom).\n- Cold Wallets: Dispositivos físicos fuera de internet (Ledger, Trezor).",
    analogies: [
      "Exchange = Casa de cambio en el aeropuerto; Wallet = Tu caja fuerte personal en casa.",
      "En el Exchange ellos tienen las llaves; en la Wallet tú eres el único dueño."
    ],
    flashcards: [
      { question: "¿Quién tiene el control total de las llaves en un Exchange?", answer: "La plataforma del Exchange, no el usuario final." },
      { question: "¿Qué es una Cold Wallet?", answer: "Un dispositivo físico (tipo USB) no conectado a internet, lo más seguro." },
      { question: "¿Cuál es la recomendación de oro de Cryptomania?", answer: "Usar Exchange para comprar y Wallet para ahorrar a largo plazo." }
    ]
  },
  'bitcoin-2026': {
    explanation: "Para el 2026, Bitcoin se proyecta en una fase de maduración post-halving de 2024. Se espera una mayor integración con sistemas financieros tradicionales y una consolidación de su rol como activo de reserva institucional.",
    analogies: [
      "Es como el internet en los 90: pasando de ser una curiosidad a una necesidad global.",
    ],
    flashcards: [
      { question: "¿Qué evento pasado influye en la escasez de 2026?", answer: "El Halving de Bitcoin ocurrido en 2024." }
    ]
  },
  'price-tracking': {
    explanation: "Las mejores plataformas para monitorear el mercado son CoinMarketCap y CoinGecko. Ofrecen precios en tiempo real, capitalización, volumen y listado de nuevas gemas del ecosistema.",
    analogies: [
      "Son como el Bloomberg o Yahoo Finance exclusivo del mundo cripto.",
    ],
    flashcards: [
      { question: "¿Menciona una plataforma líder para ver precios?", answer: "CoinMarketCap o CoinGecko." }
    ]
  }
};
