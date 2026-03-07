export const CRYPTO_PRICES = {
  BTC: { name: 'Bitcoin', symbol: 'BTC', price: 68000, color: '#F7931A' },
  ETH: { name: 'Ethereum', symbol: 'ETH', price: 2000, color: '#627EEA' },
  SOL: { name: 'Solana', symbol: 'SOL', price: 84, color: '#14F195' },
};

export const EXCHANGE_RATES = {
  USD_TO_MXN: 17.79,
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

interface EduContent {
  explanation: string;
  analogies: string[];
  flashcards: { question: string; answer: string }[];
}

export const STATIC_EDU_CONTENT: Record<string, Record<'en' | 'es', EduContent>> = {
  'what-is-crypto': {
    es: {
      explanation: "Es una forma de dinero digital descentralizado que utiliza la criptografía (matemáticas avanzadas) para garantizar transacciones seguras. A diferencia del peso mexicano o el dólar, no dependen de un banco central o un gobierno; funcionan mediante una red de computadoras global que valida cada movimiento, asegurando que nadie pueda falsificarlas o gastar el mismo dinero dos veces.\n\nDebes tener en cuenta que antes de iniciar tu emprendimiento en el mundo, cripto te recomendamos que tengas en suma consideración que el monto invertido SIEMPRE sea dinero que no necesites o que no forme parte del capital económico que utilices para subsistir y tomar siempre en cuenta las dos caras de la moneda. A continuación te presentamos un listado de 5 ventajas y 5 desventajas de invertir en criptomonedas en la actualidad.",
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
    en: {
      explanation: "It is a form of decentralized digital money that uses cryptography (advanced mathematics) to ensure secure transactions. Unlike the Mexican peso or the US dollar, they do not depend on a central bank or government; they operate through a global computer network that validates every movement, ensuring that no one can counterfeit them or spend the same money twice.\n\nYou should keep in mind that before starting your venture in the crypto world, we recommend you take into high consideration that the amount invested should ALWAYS be money that you do not need or that is not part of the economic capital you use to subsist, and always take into account both sides of the coin. Below we present a list of 5 advantages and 5 disadvantages of investing in cryptocurrencies today.",
      analogies: [
        "It is like a digital ledger that everyone can see but no one can erase.",
        "Like gold, but digital and easy to send anywhere in the world instantly."
      ],
      flashcards: [
        { question: "Do cryptocurrencies depend on a central bank?", answer: "No, they are decentralized and work through a global network." },
        { question: "What technology guarantees the security of transactions?", answer: "Cryptography (advanced mathematics)." },
        { question: "What investment recommendation does Cryptomania suggest?", answer: "Only invest money you don't need to subsist." }
      ]
    }
  },
  'best-cryptos': {
    es: {
      explanation: "De igual modo, como en todo campo de inversión volátil, invertir en divisas menos conocidas te pondrá en una mayor posición de riesgo que invirtiendo en las divisas que han ganado la confianza del público cripto por mantenerse estables y sin prometer rendimientos extraordinarios.\nEs por ello, que en Criptomania.com te hemos preparado un artículo enfocándonos en las tres divisas digitales más conocidas, robustas y con mayor trayectoria en el mercado global:\n\n1. Bitcoin (BTC) – El Oro Digital\nLanzada en 2009 por Satoshi Nakamoto, es la primera y más importante criptomoneda. Su función principal es servir como reserva de valor y sistema de pago descentralizado. Con un suministro limitado a 21 millones de unidades, Bitcoin es la moneda que introdujo la escasez digital al mundo, funcionando hoy como un refugio financiero frente a la devaluación de las monedas tradicionales.\n\n2. Ethereum (ETH) – La Computadora Global\nMás que una moneda, Ethereum es una plataforma que permite crear \"Contratos Inteligentes\" y aplicaciones descentralizadas (dApps). Si Bitcoin es el oro, Ethereum es el internet programable. Su moneda, el Ether, se utiliza para pagar la capacidad de cómputo de la red, permitiendo desde préstamos automáticos hasta la creación de activos digitales sin intermediarios.\n\n3. Solana (SOL) – La Red de Alta Velocidad\nReconocida por su eficiencia y rapidez extrema, Solana nació para solucionar los problemas de lentitud de redes más antiguas. Es capaz de procesar miles de transacciones por segundo a un costo casi nulo (centavos de peso). Es la opción preferida para usuarios que buscan agilidad y escalabilidad en el mundo de los pagos digitales y los coleccionables (NFTs). \n\n¿Por qué trabajamos con estas tres?\nSeleccionamos a Bitcoin, Ethereum y Solana porque representan la trinidad de la madurez criptográfica:\n• Bitcoin por su seguridad inigualable.\n• Ethereum por su versatilidad y ecosistema.\n• Solana por su innovación técnica y velocidad.\nSon las criptomonedas con mayor liquidez y las que mejor han resistido los ciclos del mercado, convirtiéndolas en la base ideal para cualquier persona que desee comenzar su educación financiera en este sector.",
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
    en: {
      explanation: "Similarly, as in any volatile investment field, investing in lesser-known currencies will put you in a higher risk position than investing in currencies that have earned the trust of the crypto public for remaining stable and not promising extraordinary returns.\nThat is why at Criptomania.com we have prepared an article focusing on the three most well-known, robust, and track-record-rich digital currencies in the global market:\n\n1. Bitcoin (BTC) – Digital Gold\nLaunched in 2009 by Satoshi Nakamoto, it is the first and most important cryptocurrency. Its primary function is to serve as a store of value and decentralized payment system. With a limited supply of 21 million units, Bitcoin introduced digital scarcity to the world, functioning today as a financial refuge against the devaluation of traditional currencies.\n\n2. Ethereum (ETH) – The Global Computer\nMore than a currency, Ethereum is a platform that allows the creation of 'Smart Contracts' and decentralized applications (dApps). If Bitcoin is gold, Ethereum is the programmable internet. Its currency, Ether, is used to pay for the network's computing power, allowing everything from automatic loans to the creation of digital assets without intermediaries.\n\n3. Solana (SOL) – The High-Speed Network\nRecognized for its extreme efficiency and speed, Solana was born to solve the slowness problems of older networks. It is capable of processing thousands of transactions per second at almost zero cost. It is the preferred choice for users seeking agility and scalability in the world of digital payments and collectibles (NFTs).\n\nWhy do we work with these three?\nWe selected Bitcoin, Ethereum, and Solana because they represent the trinity of cryptographic maturity:\n• Bitcoin for its unparalleled security.\n• Ethereum for its versatility and ecosystem.\n• Solana for its technical innovation and speed.",
      analogies: [
        "Bitcoin is gold; Ethereum is the programmable internet; Solana is the high-speed highway.",
        "They are the 'trinity of cryptographic maturity' for their security, versatility, and innovation."
      ],
      flashcards: [
        { question: "What is the maximum supply of Bitcoin?", answer: "21 million units." },
        { question: "What does Ethereum allow to be created besides its currency?", answer: "Smart Contracts and decentralized applications (dApps)." },
        { question: "Why does Solana stand out in the market?", answer: "For its ability to process transactions at high speed and low cost." }
      ]
    }
  },
  'pros-cons': {
    es: {
      explanation: "Las ventajas de apostar por un futuro digitalizado\n1. Descentralización: No dependen de ningún gobierno o banco central, es decir, tu dinero te pertenece al 100% y nadie puede congelar tu cuenta o decidir cómo usar tu capital.\n2. Transparencia Total: Gracias a la tecnología Blockchain, cada transacción es pública y verificable. Es un sistema contable que no puede ser manipulado ni corrompido.\n3. Accesibilidad 24/7: A diferencia de la Bolsa de Valores o los bancos, el mercado cripto nunca cierra. Puedes enviar o recibir fondos a cualquier parte del mundo en minutos, cualquier día del año.\n4. Escasez Programada: Criptomonedas como Bitcoin tienen un límite de emisión (21 millones). A diferencia del peso o el dólar, que se imprimen constantemente perdiendo valor, el BTC está diseñado para ser deflacionario.\n5. Inclusión Financiera: Cualquier persona con un celular y conexión a internet puede abrir una billetera digital, sin necesidad de historial crediticio o trámites burocráticos.\n\nDesventajas reales de invertir en el Criptomundo\n1. Alta Volatilidad: Los precios pueden subir o bajar drásticamente en cuestión de horas. Como mencionamos en nuestro portal, actualmente BTC está en mínimos de 5 meses, lo que requiere una mentalidad de acero.\n2. Irreversibilidad de Transacciones: Si envías criptomonedas a una dirección equivocada o pierdes las claves de tu billetera (Seed Phrase), el dinero se pierde para siempre. No hay un \"botón de soporte\" para recuperar fondos.\n3. Riesgos de Seguridad: Aunque la red es segura, los usuarios pueden ser víctimas de phishing, hackeos a exchanges o estafas. La responsabilidad de la seguridad recae totalmente en el dueño.\n4. Incertidumbre Regulatoria: Los gobiernos siguen debatiendo cómo supervisar este mercado. Cambios en las leyes fiscales o prohibiciones en ciertos países pueden afectar el precio de golpe.\n5. Barrera de Aprendizaje: No es dinero \"mágico\". Requiere tiempo entender cómo funcionan las redes (como las diferencias entre Ethereum y Solana) para no cometer errores técnicos costosos.",
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
    en: {
      explanation: "Advantages of betting on a digitized future:\n1. Decentralization: They do not depend on any government or central bank; your money belongs 100% to you.\n2. Total Transparency: Thanks to Blockchain, every transaction is public and verifiable. It's a tamper-proof accounting system.\n3. 24/7 Accessibility: Unlike the stock market or banks, the crypto market never closes.\n4. Programmed Scarcity: Cryptocurrencies like Bitcoin have an emission limit (21 million), making them deflationary by design.\n5. Financial Inclusion: Anyone with a cell phone and internet can open a digital wallet without bureaucracy.\n\nReal disadvantages of investing in the Cryptoworld:\n1. High Volatility: Prices can fluctuate drastically in hours.\n2. Irreversibility of Transactions: If you send funds to the wrong address, they are lost forever. There is no support button.\n3. Security Risks: Users can be victims of phishing or hacks. Security responsibility lies with the owner.\n4. Regulatory Uncertainty: Government oversight debates can affect prices suddenly.\n5. Learning Barrier: It requires time to understand technical differences and avoid costly errors.",
      analogies: [
        "It's like being your own bank: total freedom but absolute responsibility.",
        "Volatility is a financial roller coaster that requires a mind of steel."
      ],
      flashcards: [
        { question: "What happens if you send crypto to the wrong address?", answer: "The transaction is irreversible and the money is lost forever." },
        { question: "Why is Bitcoin considered deflationary?", answer: "Because it has a programmed emission limit, unlike traditional money." },
        { question: "Does the crypto market have closing hours?", answer: "No, it is accessible 24 hours a day, 7 days a week." }
      ]
    }
  },
  'exchange-vs-wallet': {
    es: {
      explanation: "1. ¿Qué es un Exchange? (La Casa de Cambio)\nUn Exchange es una plataforma digital que funciona como un mercado donde puedes comprar y vender criptomonedas usando tu dinero local.\nSu función: Es el puente entre el mundo del banco tradicional y el mundo cripto.\nAnalogía: Imagínalo como una Casa de Cambio en el aeropuerto.\n\n2. ¿Qué es una Wallet? (Tu Billetera Personal)\nUna Wallet es una herramienta que te permite almacenar, enviar y recibir tus criptomonedas de forma directa en la blockchain, sin intermediarios.\nSu función: Es donde realmente posees tus activos mediante unas \"Frases de Recuperación\".\nAnalogía: Es como tu Caja Fuerte personal en casa.\n\nRecomendación de ORO: En Cryptomania recomendamos usar el Exchange para comprar y la Wallet para ahorrar criptomonedas a largo plazo.",
      analogies: [
        "Exchange = Casa de cambio en el aeropuerto; Wallet = Tu caja fuerte personal en casa.",
        "En el Exchange ellos tienen las llaves; en la Wallet tú eres el único dueño."
      ],
      flashcards: [
        { question: "¿Quién tiene el control total de las llaves en un Exchange?", answer: "La plataforma del Exchange, no el usuario final." },
        { question: "¿Qué es una Cold Wallet?", answer: "Un dispositivo físico no conectado a internet, lo más seguro." },
        { question: "¿Cuál es la recomendación de oro de Cryptomania?", answer: "Usar Exchange para comprar y Wallet para ahorrar a largo plazo." }
      ]
    },
    en: {
      explanation: "1. What is an Exchange? (The Currency Exchange)\nAn Exchange is a digital platform that works as a marketplace where you can buy and sell cryptocurrencies using local money.\nIts function: It's the bridge between traditional banking and the crypto world.\nAnalogy: Imagine it like a currency exchange at an airport.\n\n2. What is a Wallet? (Your Personal Wallet)\nA Wallet is a tool that allows you to store, send, and receive cryptocurrencies directly on the blockchain, without intermediaries.\nIts function: It's where you truly own your assets using 'Recovery Phrases'.\nAnalogy: It's like your personal safe at home.\n\nGOLD Recommendation: At Cryptomania we recommend using the Exchange to buy and the Wallet to save cryptocurrencies for the long term.",
      analogies: [
        "Exchange = Airport currency exchange; Wallet = Your personal safe at home.",
        "In the Exchange they have the keys; in the Wallet you are the only owner."
      ],
      flashcards: [
        { question: "Who has total control of the keys in an Exchange?", answer: "The platform, not the end user." },
        { question: "What is a Cold Wallet?", answer: "A physical device (USB type) not connected to the internet, the most secure." },
        { question: "What is Cryptomania's gold recommendation?", answer: "Use Exchange for buying and Wallet for long-term saving." }
      ]
    }
  },
  'bitcoin-2026': {
    es: {
      explanation: "Actualmente, en marzo del 2026 se está viviendo una etapa crítica en la estabilidad del modelo económico actual donde los metales valiosos como el oro y la plata están alcanzando máximos históricos debido a una pérdida de confianza global en el sistema monetario tradicional y el dólar.\nUn signo que podría alarmar a cualquiera, puesto que en medio del caos que se vive actualmente, parece ser que se están realizando paralelamente movimientos estratégicos de los grandes inversores y bancos centrales fuera de Occidente en busca de refugio ante la devaluación de la moneda y el exceso de deuda. \nPor otro lado, se examina por contra parte que el Bitcoin no ha seguido esta tendencia alcista, comportándose aún más como un activo de riesgo que como una reserva de valor, y aunque la realidad es que actualmente, la Bitcoin está a punto de llegar a su bajo histórico con 5 meses en bajada; algo que NUNCA se había visto desde el 2018, la reality es que el Bitcoin no dejará de existir y todo indica que se encuentra en una fase temprana de adaptación con el mercado financiero.  \nVarios estudios plantean que los próximos 30 días serán cruciales para definir si la criptomoneda logra consolidarse como el \"oro digital\" o si continuará supeditada a la liquidez del mercado financiero y que en algún punto, el Bitcoin se equiparará al Oro y la Plata, pero por ahora todo indica que ese estado se encuentra lejano y por ahora, el Bitcoin funciona como una reserva de valor alternativa descentralizada, es decir, ajena a cualquier gobierno o factor global.\nPor lo tanto, con todo lo antes mencionado, podemos decir que en caso de que quieras comprar una Bitcoin, estás en el mejor momento histórico para hacerlo, en cambio si estás preocupado de que saldo bitcoin o de cualquiera de las tres criptomedas que promovemos vayan a dejar de existir, quédate tranquilo o tranquila, ya que todo indica que eventualmente volverán a encontrar su característica estabilidad.",
      analogies: [
        "Bitcoin es como un refugio digital alternativo: ajeno a gobiernos y factores globales.",
        "Es una fase temprana de adaptación: como los primeros días de un nuevo sistema financiero global."
      ],
      flashcards: [
        { question: "¿Cómo se comporta el Bitcoin en marzo de 2026 frente al oro?", answer: "Se comporta más como un activo de riesgo que como una reserva de valor alcista." },
        { question: "¿Qué hito negativo de tiempo en bajada se menciona?", answer: "5 meses en bajada, algo que no ocurría desde el 2018." },
        { question: "¿Cuál es la recomendación para quienes buscan comprar Bitcoin ahora?", answer: "Que es el mejor momento histórico para hacerlo debido a su bajo precio." }
      ]
    },
    en: {
      explanation: "Currently, in March 2026, we are living in a critical stage in economic stability where precious metals like gold and silver are reaching all-time highs due to global loss of confidence in the dollar.\nWhile Bitcoin hasn't followed this bullish trend yet, behaving more as a risk asset, it shows signs of early adaptation with the financial market. Despite a 5-month decline—something not seen since 2018—Bitcoin remains a decentralized alternative store of value.\nThe next 30 days will be crucial to see if it solidifies as 'digital gold'. If you are looking to buy, it might be the best historical moment due to low prices. Rest assured, stability is expected to return eventually.",
      analogies: [
        "Bitcoin is like a decentralized alternative refuge: independent of governments and global factors.",
        "It is an early adaptation phase: like the early days of a new global financial system."
      ],
      flashcards: [
        { question: "How does Bitcoin behave in March 2026 compared to gold?", answer: "It behaves more like a risk asset than a bullish store of value." },
        { question: "What negative price milestone is mentioned?", answer: "5 months in decline, something that hadn't happened since 2018." },
        { question: "What is the advice for those wanting to buy Bitcoin now?", answer: "That it's the best historical moment to do so due to the current low price." }
      ]
    }
  },
  'price-tracking': {
    es: {
      explanation: "Para tomar buenas decisiones financieras, es fundamental usar fuentes de datos precisas. Estas son las tres plataformas líderes:\n\n1. CoinGecko (Nuestra recomendación)\nEs la plataforma que alimenta nuestra propia calculadora. Ideal para ver el precio en Pesos Mexicanos (MXN) y seguir el market cap.\n\n2. CoinMarketCap\nEl sitio web más antiguo y visitado del mundo. Ideal para comparar volumen de transacciones y ver gráficos históricos.\n\n3. DEX Screener (Para expertos)\nRastrea monedas que acaban de lanzarse en redes como Solana. Ideal para ver el \"pulso\" real del mercado antes de que llegue a las masas.\n\n💡 Consejo de Oro\nNo te fíes de una sola fuente. Contrasta la información antes de realizar cualquier movimiento importante.",
      analogies: [
        "Estas plataformas son el Google Maps del mundo financiero digital.",
        "DEX Screener es el radar para detectar barcos antes de que lleguen al puerto principal."
      ],
      flashcards: [
        { question: "¿Qué plataforma se recomienda para ver precios en Pesos Mexicanos (MXN)?", answer: "CoinGecko." },
        { question: "¿Cuál es la ventaja de la aplicación de CoinMarketCap?", answer: "Permite crear una 'Watchlist' para seguir tus monedas favoritas." },
        { question: "¿Para qué sirve DEX Screener?", answer: "Para rastrear monedas nuevas en intercambios descentralizados antes de que lleguen a las masas." }
      ]
    },
    en: {
      explanation: "To make good financial decisions, use precise data sources. Here are the top three:\n\n1. CoinGecko (Our recommendation)\nPowers our calculator. Great for viewing prices in Mexican Pesos (MXN) and tracking market cap.\n\n2. CoinMarketCap\nThe world's most visited reference site. Ideal for comparing volume and historical charts.\n\n3. DEX Screener (For experts)\nTracks coins just launched on networks like Solana. It shows the market's pulse before it reaches the masses.\n\nGOLD Tip: Don't rely on a single source. Contrast information before making any important move.",
      analogies: [
        "These platforms are the Google Maps of the digital financial world.",
        "DEX Screener is the radar for detecting ships before they reach the main port."
      ],
      flashcards: [
        { question: "Which platform is recommended for viewing prices in Mexican Pesos (MXN)?", answer: "CoinGecko." },
        { question: "What is the advantage of the CoinMarketCap app?", answer: "It allows you to create a 'Watchlist' to follow your favorite coins." },
        { question: "What is DEX Screener used for?", answer: "To track new coins on decentralized exchanges before they reach the masses." }
      ]
    }
  }
};
