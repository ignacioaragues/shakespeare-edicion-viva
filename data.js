/*
 * A small, transparent editorial data layer.
 * The English text follows the Folger Shakespeare Library reading edition;
 * the Spanish renderings and interpretative notes were newly written for this demo.
 * Each utterance is an aligned bilingual unit so both languages stay in view.
 */
window.SHAKESPEARE_READER_DATA = {
  collection: "Shakespeare · Edición viva",
  works: [
    {
      id: "coriolanus",
      title: "Coriolanus",
      spanishTitle: "Coriolano",
      kind: "Tragedia romana",
      source: "https://www.folger.edu/explore/shakespeares-works/coriolanus/read/1/1/",
      sceneIds: ["coriolanus-1-1"]
    }
  ],
  scenes: [
    {
      id: "coriolanus-1-1",
      workId: "coriolanus",
      act: 1,
      scene: 1,
      place: "Roma · Una calle",
      sourceRef: "Folger Shakespeare Library · Acto I, escena 1",
      sectionLabel: "Fragmento de prueba · líneas 1–67",
      introduction: "Roma padece una crisis de abastecimiento. Un grupo de ciudadanos armados discute cómo actuar contra los patricios. Empezamos en plena agitación, antes de que entre el protagonista.",
      stage: "Entra un grupo de ciudadanos sublevados, con bastones, garrotes y otras armas.",
      characters: [
        { id: "citizen1", short: "1.º ciudadano", name: "Primer ciudadano", english: "First Citizen", identity: "Uno de los ciudadanos que encabezan la protesta por el grano. Su intervención es especialmente combativa; Shakespeare no le da nombre propio.", color: "copper" },
        { id: "all", short: "Ciudadanos", name: "Ciudadanos · a coro", english: "All", identity: "El grupo responde colectivamente. Conviene distinguir estas intervenciones de las de cada ciudadano individual.", color: "slate" },
        { id: "citizen2", short: "2.º ciudadano", name: "Segundo ciudadano", english: "Second Citizen", identity: "Otra voz de la protesta. Interroga al primer ciudadano y sostiene buena parte del diálogo con Menenio.", color: "olive" },
        { id: "menenius", short: "Menenio", name: "Menenio Agripa", english: "Menenius Agrippa", identity: "Patricio romano que intenta desactivar el conflicto con los ciudadanos. Entra hacia el final de nuestra muestra.", color: "ink" },
        { id: "martius", short: "Marcio", name: "Cayo Marcio", english: "Caius Martius", identity: "Militar patricio al que los ciudadanos atribuyen buena parte de sus males. Se lo menciona antes de que aparezca en escena.", color: "violet", mentionedOnly: true }
      ],
      blocks: [
        { line: "1–2", speaker: "citizen1", en: "Before we proceed any further, hear me speak.", es: "Antes de que sigamos adelante, escúchenme.", notes: [] },
        { line: "3", speaker: "all", en: "Speak, speak!", es: "¡Habla, habla!", notes: [] },
        { line: "4–5", speaker: "citizen1", en: "You are all resolved rather to die than to famish?", es: "¿Están todos decididos a morir antes que dejarse morir de hambre?", notes: [
          { term: "resolved", type: "Lengua", title: "resolved", body: "Aquí significa «decididos» o «resueltos», no «resignados». La construcción que sigue contrapone dos destinos terribles." },
          { term: "famish", type: "Léxico histórico", title: "famish", body: "Morir de hambre o padecer hambre extrema. En el inglés actual resulta arcaizante; el verbo to starve sería más corriente." }
        ] },
        { line: "6", speaker: "all", en: "Resolved, resolved!", es: "¡Decididos, decididos!", notes: [] },
        { line: "7–8", speaker: "citizen1", en: "First, you know Caius Martius is chief enemy to the people.", es: "En primer lugar, saben que Cayo Marcio es el principal enemigo del pueblo.", notes: [
          { term: "Caius Martius", type: "Personajes", title: "Caius Martius", body: "Cayo Marcio es el nombre con el que se presenta inicialmente al protagonista. Su nombre y el título de la obra no son intercambiables en todos los momentos de la acción." }
        ] },
        { line: "9", speaker: "all", en: "We know ’t, we know ’t!", es: "¡Lo sabemos, lo sabemos!", notes: [
          { term: "’t", type: "Lengua", title: "’t", body: "Forma reducida de it. Shakespeare usa constantemente estas contracciones, sobre todo en el diálogo dramático." }
        ] },
        { line: "10–11", speaker: "citizen1", en: "Let us kill him, and we’ll have corn at our own price. Is ’t a verdict?", es: "Matémoslo, y tendremos grano al precio que nosotros fijemos. ¿Estamos todos de acuerdo?", notes: [
          { term: "corn", type: "Léxico histórico", title: "corn", body: "En el inglés de Shakespeare significa «grano» o «cereal» en general, no necesariamente maíz, sentido habitual en el inglés estadounidense actual." },
          { term: "verdict", type: "Retórica", title: "verdict", body: "El hablante presenta el consentimiento colectivo como si fuera un veredicto formal. La palabra tiene resonancias jurídicas, aunque aquí no hay un juicio." }
        ] },
        { line: "12", speaker: "all", en: "No more talking on ’t; let it be done. Away, away!", es: "¡Basta de hablar del asunto! Que se haga. ¡Vamos, vamos!", notes: [] },
        { line: "13", speaker: "citizen2", en: "One word, good citizens.", es: "Un momento, buenos ciudadanos.", notes: [] },
        { line: "14–16", speaker: "citizen1", en: "We are accounted poor citizens, the patricians good. What authority surfeits on would relieve us.", es: "A nosotros nos consideran ciudadanos pobres; a los patricios, respetables. Aquello de lo que se atiborra el poder bastaría para remediar nuestra necesidad.", notes: [
          { term: "accounted", type: "Léxico", title: "accounted", body: "«Considerados», «tenidos por». No se refiere simplemente a un cálculo: hay una clasificación social implícita." },
          { term: "good", type: "Semántica", title: "poor / good", body: "La oposición mezcla riqueza, estatus y valoración moral. Los patricios se consideran «buenos ciudadanos» en contraste con quienes son pobres." },
          { term: "What authority surfeits on", type: "Sintaxis", title: "What authority surfeits on", body: "Es una relativa libre que funciona como sujeto de would relieve us. Reordenado: «The things that those in power gorge themselves on would be enough to relieve us». Authority designa colectivamente a quienes ejercen el poder." },
          { term: "surfeits", type: "Crítica textual", title: "surfeits on / surfeits one", body: "El First Folio (1623) imprime «surfeits one»; Folger edita «surfeits on». Es una intervención textual menor, pero permite ver que la puntuación y la grafía de una edición moderna no son transparentes." }
        ] },
        { line: "16–18", speaker: "citizen1", en: "If they would yield us but the superfluity while it were wholesome, we might guess they relieved us humanely.", es: "Si tan solo nos entregaran lo que les sobra, mientras todavía estuviese en buen estado, podríamos pensar que nos socorren humanamente.", notes: [
          { term: "yield us", type: "Lengua", title: "yield us", body: "«Darnos», «cedernos». Us funciona como dativo: aquello que se cede se expresa después como the superfluity." },
          { term: "but", type: "Sintaxis", title: "but", body: "Aquí equivale a «solamente» o «tan solo». No introduce una oposición adversativa." },
          { term: "wholesome", type: "Semántica", title: "wholesome", body: "En este contexto, alimento sano, todavía apto para comer. No «saludable» en el sentido vago y moralizado que puede tener hoy." }
        ] },
        { line: "18–21", speaker: "citizen1", en: "But they think we are too dear. The leanness that afflicts us, the object of our misery, is as an inventory to particularize their abundance; our sufferance is a gain to them.", es: "Pero consideran que mantenernos cuesta demasiado. Nuestra flacura, la prueba visible de nuestra miseria, es como un inventario que detalla su abundancia; nuestro sufrimiento es ganancia para ellos.", notes: [
          { term: "too dear", type: "Semántica", title: "too dear", body: "Dear puede significar «querido» y también «caro». Aquí la expresión presenta a los pobres como una carga económica a ojos de los privilegiados." },
          { term: "inventory", type: "Imagen retórica", title: "inventory", body: "El cuerpo escuálido se convierte figuradamente en un inventario de los bienes ajenos. El contraste riqueza / hambre se representa mediante una metáfora contable." },
          { term: "sufferance", type: "Léxico histórico", title: "sufferance", body: "Aquí «sufrimiento» o «padecimiento», no el sentido legal moderno de tolerancia o permiso tácito." }
        ] },
        { line: "21–24", speaker: "citizen1", en: "Let us revenge this with our pikes ere we become rakes; for the gods know I speak this in hunger for bread, not in thirst for revenge.", es: "Venguemos esto con nuestras picas antes de quedar flacos como rastrillos; pues los dioses saben que hablo por hambre de pan, no por sed de venganza.", notes: [
          { term: "pikes", type: "Juego verbal", title: "pikes / rakes", body: "Pikes son picas, armas largas; rakes son rastrillos. El par produce un juego sonoro que conduce de las armas al cuerpo demacrado por el hambre." },
          { term: "ere", type: "Léxico histórico", title: "ere", body: "Conjunción que significa «antes de». Muy frecuente en la poesía y el teatro de la época." },
          { term: "hunger for bread", type: "Retórica", title: "hunger / thirst", body: "La antítesis hambre de pan / sed de venganza separa explícitamente la necesidad material del deseo de violencia, aunque el discurso incite a ella." }
        ] },
        { line: "25–26", speaker: "citizen2", en: "Would you proceed especially against Caius Martius?", es: "¿Quieren actuar específicamente contra Cayo Marcio?", notes: [] },
        { line: "27–28", speaker: "all", en: "Against him first. He’s a very dog to the commonalty.", es: "Contra él primero. Es un verdadero perro con el pueblo llano.", notes: [
          { term: "commonalty", type: "Léxico histórico", title: "commonalty", body: "El conjunto de la gente común, especialmente en contraposición con los grupos privilegiados; «el pueblo llano»." }
        ] },
        { line: "29–30", speaker: "citizen2", en: "Consider you what services he has done for his country?", es: "¿Tienen en cuenta los servicios que le ha prestado a su patria?", notes: [
          { term: "Consider you", type: "Sintaxis", title: "Consider you", body: "Interrogativa sin el auxiliar do. Un lector moderno esperaría «Do you consider…?»." }
        ] },
        { line: "31–33", speaker: "citizen1", en: "Very well, and could be content to give him good report for ’t, but that he pays himself with being proud.", es: "Por supuesto; incluso estaría dispuesto a hablar bien de él por eso, si no fuera porque ya se recompensa a sí mismo con su soberbia.", notes: [
          { term: "but that", type: "Sintaxis", title: "but that", body: "En esta construcción equivale aproximadamente a «si no fuera porque». Introduce la razón por la que el hablante retira su elogio." }
        ] },
        { line: "34", speaker: "citizen2", en: "Nay, but speak not maliciously.", es: "No, pero no hables con mala intención.", notes: [
          { term: "Nay", type: "Crítica textual", title: "¿Quién pronuncia esta frase?", body: "Este es un caso interesante: el First Folio atribuye la réplica al conjunto de los ciudadanos (All); la edición Folger la asigna al Segundo ciudadano. La atribución es una decisión editorial y afecta ligeramente la dinámica dramática." }
        ] },
        { line: "35–40", speaker: "citizen1", en: "I say unto you, what he hath done famously he did it to that end. Though soft-conscienced men can be content to say it was for his country, he did it to please his mother and to be partly proud, which he is, even to the altitude of his virtue.", es: "Yo te digo que todas sus hazañas las hizo con ese propósito. Aunque los hombres de conciencia indulgente se conformen con decir que actuó por su patria, lo hizo para complacer a su madre y satisfacer su orgullo, que alcanza incluso la altura de su virtud.", notes: [
          { term: "hath", type: "Lengua", title: "hath", body: "Tercera persona singular de have. Equivale al inglés actual has." },
          { term: "soft-conscienced", type: "Semántica", title: "soft-conscienced", body: "Quienes juzgan con una conciencia demasiado blanda o indulgente. El primer ciudadano desacredita de antemano la lectura patriótica de las hazañas." },
          { term: "altitude of his virtue", type: "Interpretación", title: "altitude of his virtue", body: "La imagen de la altura concede que la virtud de Marcio es grande, pero sugiere que su orgullo crece hasta el mismo nivel. Un elogio queda absorbido por una acusación." }
        ] },
        { line: "41–43", speaker: "citizen2", en: "What he cannot help in his nature you account a vice in him. You must in no way say he is covetous.", es: "Le atribuyes como vicio algo que no puede evitar por su propia naturaleza. Lo que de ningún modo puedes decir es que sea codicioso.", notes: [
          { term: "What he cannot help", type: "Sintaxis", title: "What he cannot help in his nature", body: "La relativa libre aparece antepuesta como objeto de account: «You account what he cannot help in his nature a vice in him»." },
          { term: "covetous", type: "Léxico", title: "covetous", body: "Codicioso, especialmente de posesiones o riquezas. No es sinónimo general de «ambicioso» en todos los contextos." }
        ] },
        { line: "44–48", speaker: "citizen1", en: "If I must not, I need not be barren of accusations. He hath faults, with surplus, to tire in repetition. What shouts are these? The other side o’ th’ city is risen. Why stay we prating here? To th’ Capitol!", es: "Si eso no puedo decirlo, no por eso me faltan acusaciones. Tiene defectos de sobra, tantos que cansaría enumerarlos. ¿Qué gritos son esos? ¡El otro lado de la ciudad se ha sublevado! ¿Por qué seguimos aquí parloteando? ¡Al Capitolio!", notes: [
          { term: "barren", type: "Metáfora", title: "barren of accusations", body: "Barren significa «estéril» o «improductivo». El hablante insiste en que dispone de muchas acusaciones alternativas." },
          { term: "risen", type: "Léxico", title: "risen", body: "Aquí «levantado» o «sublevado», no simplemente «se ha puesto de pie»." },
          { term: "prating", type: "Léxico histórico", title: "prating", body: "Hablar inútilmente, parlotear. El personaje se impacienta con la discusión." }
        ] },
        { line: "49", speaker: "all", en: "Come, come!", es: "¡Vamos, vamos!", notes: [] },
        { line: "50", speaker: "citizen1", en: "Soft, who comes here?", es: "Un momento, ¿quién viene ahí?", notes: [
          { term: "Soft", type: "Léxico histórico", title: "Soft", body: "Interjección que pide detenerse o bajar el ritmo: «espera», «un momento», «alto ahí». No debe traducirse literalmente como «suave»." }
        ], stageBefore: "Entra Menenio Agripa." },
        { line: "51–52", speaker: "citizen2", en: "Worthy Menenius Agrippa, one that hath always loved the people.", es: "El digno Menenio Agripa, uno que siempre ha querido al pueblo.", notes: [] },
        { line: "53–54", speaker: "citizen1", en: "He’s one honest enough. Would all the rest were so!", es: "Ese es bastante honrado. ¡Ojalá los demás fueran como él!", notes: [
          { term: "Would", type: "Sintaxis", title: "Would all the rest were so!", body: "Construcción optativa: «Ojalá todos los demás fueran así». Would no funciona aquí como simple condicional." }
        ] },
        { line: "55–57", speaker: "menenius", en: "What work’s, my countrymen, in hand? Where go you with bats and clubs? The matter? Speak, I pray you.", es: "¿Qué están tramando, compatriotas? ¿Adónde van con palos y garrotes? ¿Qué sucede? Díganmelo, se lo ruego.", notes: [
          { term: "What work’s", type: "Sintaxis", title: "What work’s … in hand?", body: "What work is in hand? equivale a «¿Qué asunto se trae entre manos?». El apóstrofo marca la contracción de is." },
          { term: "bats", type: "Léxico histórico", title: "bats", body: "En este contexto, palos o bastones usados como armas, no murciélagos." }
        ] },
        { line: "58–62", speaker: "citizen2", en: "Our business is not unknown to th’ Senate. They have had inkling this fortnight what we intend to do, which now we’ll show ’em in deeds. They say poor suitors have strong breaths; they shall know we have strong arms too.", es: "El Senado conoce bien nuestras intenciones. Hace quince días que tiene indicios de lo que planeamos, y ahora se lo mostraremos con hechos. Dicen que los pobres suplicantes tienen el aliento fuerte; pronto sabrán que también tenemos brazos fuertes.", notes: [
          { term: "inkling", type: "Léxico", title: "inkling", body: "Indicio, sospecha o conocimiento parcial de algo. Aquí el Senado ya sabe que se prepara una acción." },
          { term: "this fortnight", type: "Léxico histórico", title: "this fortnight", body: "Un período de dos semanas. Aquí «durante estas últimas dos semanas»." },
          { term: "strong breaths", type: "Retórica", title: "strong breaths / strong arms", body: "La primera expresión puede aludir al mal aliento de los pobres que vienen a suplicar; la réplica transforma ese desprecio social en una amenaza física mediante el paralelo con arms." }
        ] },
        { line: "63–65", speaker: "menenius", en: "Why, masters, my good friends, mine honest neighbors, will you undo yourselves?", es: "Pero, señores, buenos amigos míos, honrados vecinos, ¿quieren provocar su propia ruina?", notes: [
          { term: "undo yourselves", type: "Semántica", title: "undo yourselves", body: "«Arruinarse», «destruirse». Menenio presenta la rebelión como algo que terminará perjudicando a los propios sublevados." }
        ] },
        { line: "66–67", speaker: "citizen2", en: "We cannot, sir; we are undone already.", es: "No podemos, señor: ya estamos arruinados.", notes: [
          { term: "undone", type: "Retórica", title: "undo / undone", body: "El segundo ciudadano devuelve a Menenio su misma palabra: no pueden arruinarse porque ya están arruinados. El paralelismo revela la distancia entre las dos perspectivas sociales." }
        ] }
      ]
    }
  ]
};
