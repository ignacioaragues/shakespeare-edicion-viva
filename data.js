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
      sceneIds: ["coriolanus-1-1", "coriolanus-1-2"]
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
      sectionLabel: "Edición en curso · líneas 1–321",
      introduction: "Roma padece una crisis de abastecimiento. Un grupo de ciudadanos armados discute cómo actuar contra los patricios. Empezamos en plena agitación, antes de que entre el protagonista.",
      stage: "Entra un grupo de ciudadanos sublevados, con bastones, garrotes y otras armas.",
      characters: [
        { id: "citizen1", short: "1.º ciudadano", name: "Primer ciudadano", english: "First Citizen", identity: "Uno de los ciudadanos que encabezan la protesta por el grano. Su intervención es especialmente combativa; Shakespeare no le da nombre propio.", color: "copper" },
        { id: "all", short: "Ciudadanos", name: "Ciudadanos · a coro", english: "All", identity: "El grupo responde colectivamente. Conviene distinguir estas intervenciones de las de cada ciudadano individual.", color: "slate" },
        { id: "citizen2", short: "2.º ciudadano", name: "Segundo ciudadano", english: "Second Citizen", identity: "Otra voz de la protesta. Interroga al primer ciudadano y sostiene buena parte del diálogo con Menenio.", color: "olive" },
        { id: "menenius", short: "Menenio", name: "Menenio Agripa", english: "Menenius Agrippa", identity: "Patricio romano que intenta desactivar el conflicto con los ciudadanos. Interviene en la discusión y propone una fábula.", color: "ink" },
        { id: "martius", short: "Marcio", name: "Cayo Marcio", english: "Caius Martius", identity: "Militar patricio al que los ciudadanos atribuyen buena parte de sus males. Se lo menciona antes de que aparezca en escena.", color: "violet", mentionedOnly: true },
        {"id":"messenger","short":"Mensajero","name":"Mensajero","english":"Messenger","identity":"Anuncia el levantamiento de los volscos.","color":"slate"},
        {"id":"cominius","short":"Cominio","name":"Cominio","english":"Cominius","identity":"General romano que dirige la expedición contra los volscos.","color":"ink"},
        {"id":"lartius","short":"Larcio","name":"Tito Larcio","english":"Titus Lartius","identity":"Comandante romano que acompaña a Marcio y Cominio.","color":"olive"},
        {"id":"senator1","short":"Senador","name":"Primer senador","english":"First Senator","identity":"Senador que confirma la movilización volsca.","color":"ink"},
        {"id":"sicinius","short":"Sicinio","name":"Sicinio Veluto","english":"Sicinius Velutus","identity":"Tribuno de la plebe, crítico de la soberbia de Marcio.","color":"copper"},
        {"id":"brutus","short":"Bruto","name":"Junio Bruto","english":"Junius Brutus","identity":"Tribuno de la plebe que cuestiona las ambiciones de Marcio.","color":"olive"},
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
        { line: "66", speaker: "citizen2", en: "We cannot, sir; we are undone already.", es: "No podemos, señor: ya estamos arruinados.", notes: [
          { term: "undone", type: "Retórica", title: "undo / undone", body: "El segundo ciudadano devuelve a Menenio su misma palabra: no pueden arruinarse porque ya están arruinados. El paralelismo revela la distancia entre las dos perspectivas sociales." }
        ] },
        {"line":"67–80","speaker":"menenius","en":"I tell you, friends, most charitable care Have the patricians of you. For your wants, Your suffering in this dearth, you may as well Strike at the heaven with your staves as lift them Against the Roman state, whose course will on The way it takes, cracking ten thousand curbs Of more strong link asunder than can ever Appear in your impediment. For the dearth, The gods, not the patricians, make it, and Your knees to them, not arms, must help. Alack, You are transported by calamity Thither where more attends you, and you slander The helms o’ th’ state, who care for you like fathers, When you curse them as enemies.","es":"Les aseguro, amigos, que los patricios se preocupan por ustedes con la mayor generosidad. En cuanto a sus necesidades y a lo que sufren por esta escasez, tanto les serviría golpear el cielo con sus bastones como alzarlos contra el Estado romano. Este seguirá su curso y romperá diez mil ataduras más resistentes que cualquier obstáculo que ustedes puedan oponerle. La escasez la causan los dioses, no los patricios: deben buscar remedio de rodillas ante ellos, no con las armas. ¡Ay! La desgracia los arrastra hacia males aún mayores, y ustedes calumnian a quienes gobiernan el Estado, que los cuidan como padres, llamándolos enemigos.","notes":[{"term":"charitable care","type":"Retórica","title":"most charitable care","body":"Menenio atribuye a los patricios una solicitud paternal y caritativa. La afirmación forma parte de su defensa política, no es un hecho que la edición deba dar por probado."},{"term":"curbs","type":"Léxico","title":"curbs","body":"Frenos, trabas o ataduras que contienen una fuerza. La imagen presenta al Estado como un poder imposible de detener."},{"term":"Your knees to them, not arms","type":"Retórica","title":"rodillas, no armas","body":"La antítesis contrapone la súplica religiosa a la rebelión armada. Them remite a los dioses, no a los patricios."},{"term":"helms o’ th’ state","type":"Metáfora","title":"helms o’ th’ state","body":"Helm designa el timón y, por metonimia, a quienes conducen el Estado. La metáfora náutica enlaza gobierno y navegación."}]},
        {"line":"81–88","speaker":"citizen2","en":"Care for us? True, indeed! They ne’er cared for us yet. Suffer us to famish, and their storehouses crammed with grain; make edicts for usury to support usurers; repeal daily any wholesome act established against the rich, and provide more piercing statutes daily to chain up and restrain the poor. If the wars eat us not up, they will; and there’s all the love they bear us.","es":"¿Que nos cuidan? ¡Claro que sí! Jamás se han preocupado por nosotros. Nos dejan morir de hambre mientras sus graneros rebosan de cereal; dictan leyes sobre la usura para favorecer a los usureros; derogan cada día las buenas disposiciones contra los ricos y promulgan otras cada vez más duras para encadenar y someter a los pobres. Si las guerras no acaban con nosotros, ellos lo harán. Ese es todo el amor que nos tienen.","notes":[{"term":"Care for us?","type":"Retórica","title":"Care for us?","body":"La interrogación repite con incredulidad el care for you de Menenio. El ciudadano desmonta la metáfora paternal mediante ejemplos materiales."},{"term":"usury","type":"Léxico histórico","title":"usury","body":"Préstamo con interés, a menudo entendido como interés abusivo. La acusación apunta a leyes que favorecen a quienes prestan dinero."},{"term":"piercing statutes","type":"Imagen","title":"piercing statutes","body":"Piercing evoca algo que penetra o hiere. La dureza de las leyes contra los pobres se representa como violencia física."}]},
        {"line":"89–94","speaker":"menenius","en":"Either you must confess yourselves wondrous malicious Or be accused of folly. I shall tell you A pretty tale. It may be you have heard it, But since it serves my purpose, I will venture To stale ’t a little more.","es":"O reconocen que son extraordinariamente malintencionados, o habrá que acusarlos de necios. Les contaré una bonita fábula. Tal vez ya la hayan oído, pero, como viene bien a mi propósito, me arriesgaré a gastarla un poco más de tanto repetirla.","notes":[{"term":"wondrous","type":"Lengua","title":"wondrous","body":"Funciona aquí como intensificador adverbial: «extraordinariamente». No describe algo maravilloso en sentido elogioso."},{"term":"stale","type":"Léxico y edición","title":"stale ’t","body":"«Volverla trillada» o «gastarla por repetición». Folger señala la palabra como intervención editorial; conviene cotejar el aparato textual antes de atribuir una variante concreta al Folio."}]},
        {"line":"95–97","speaker":"citizen2","en":"Well, I’ll hear it, sir; yet you must not think to fob off our disgrace with a tale. But, an ’t please you, deliver.","es":"Bien, lo escucharé, señor; pero no crea que podrá despachar nuestra desgracia con un cuento. En fin, si gusta, cuéntelo.","notes":[{"term":"fob off","type":"Locución","title":"fob off","body":"Quitarse de encima una reclamación con una excusa o sustituto insuficiente. El ciudadano sospecha que la fábula desviará la discusión de su sufrimiento."},{"term":"an ’t please you","type":"Sintaxis histórica","title":"an ’t please you","body":"Fórmula condicional de cortesía, aproximadamente «si le place». An equivale a if y ’t a it."}]},
        {"line":"98–107","speaker":"menenius","en":"There was a time when all the body’s members Rebelled against the belly, thus accused it: That only like a gulf it did remain I’ th’ midst o’ th’ body, idle and unactive, Still cupboarding the viand, never bearing Like labor with the rest, where th’ other instruments Did see and hear, devise, instruct, walk, feel, And, mutually participate, did minister Unto the appetite and affection common Of the whole body. The belly answered—","es":"Hubo un tiempo en que todos los miembros del cuerpo se rebelaron contra el vientre y lo acusaron de permanecer en medio del cuerpo como un abismo, ocioso e inactivo, guardando siempre la comida en su despensa y sin compartir el trabajo de los demás. Los otros órganos veían, oían, ideaban, dirigían, caminaban y sentían, y, colaborando entre sí, atendían las necesidades y los deseos comunes de todo el cuerpo. El vientre respondió…","notes":[{"term":"gulf","type":"Léxico","title":"like a gulf","body":"Gulf sugiere una cavidad profunda que engulle cuanto recibe; refuerza la acusación de voracidad."},{"term":"cupboarding the viand","type":"Lengua y metáfora","title":"cupboarding the viand","body":"El verbo cupboarding deriva de cupboard, «despensa»: guardar el alimento como si se lo acaparara. Viand significa «comida» o «alimento»."},{"term":"mutually participate","type":"Sintaxis","title":"mutually participate","body":"La expresión subraya la cooperación recíproca de los órganos; la sintaxis acumulativa reproduce la enumeración de funciones."}]},
        {"line":"108","speaker":"citizen2","en":"Well, sir, what answer made the belly?","es":"Bien, señor, ¿qué respondió el vientre?","notes":[]},
        {"line":"109–116","speaker":"menenius","en":"Sir, I shall tell you. With a kind of smile, Which ne’er came from the lungs, but even thus— For, look you, I may make the belly smile As well as speak—it tauntingly replied To th’ discontented members, the mutinous parts That envied his receipt; even so most fitly As you malign our senators for that They are not such as you.","es":"Se lo diré, señor. Con una especie de sonrisa que no salía de los pulmones, sino que era algo así… Porque, fíjese, puedo hacer sonreír al vientre tanto como hacerlo hablar. Respondió con cierto tono burlón a los miembros descontentos, a esas partes amotinadas que envidiaban cuanto recibía; exactamente como ustedes denigran a nuestros senadores porque no son como ustedes.","notes":[{"term":"ne’er came from the lungs","type":"Imagen","title":"una sonrisa sin pulmones","body":"Menenio juega con la imposibilidad de que el vientre sonría o hable: reconoce el artificio de su personificación."},{"term":"receipt","type":"Léxico","title":"receipt","body":"Aquí designa lo que el vientre recibe, especialmente alimento, no un recibo escrito."},{"term":"tauntingly","type":"Interpretación","title":"tauntingly","body":"La réplica del vientre se presenta como burlona; esa actitud complica la pretendida benevolencia de la alegoría política."}]},
        {"line":"117–122","speaker":"citizen2","en":"Your belly’s answer—what? The kingly crownèd head, the vigilant eye, The counselor heart, the arm our soldier, Our steed the leg, the tongue our trumpeter, With other muniments and petty helps In this our fabric, if that they—","es":"¿Y la respuesta de su vientre? La cabeza coronada como un rey, el ojo vigilante, el corazón consejero, el brazo que es nuestro soldado, la pierna que es nuestra montura, la lengua que hace de trompetero y las demás defensas y pequeñas ayudas de esta estructura que es nuestro cuerpo, si todos ellos…","notes":[{"term":"muniments","type":"Léxico","title":"muniments","body":"Medios de defensa o protección; el término prolonga las imágenes militares y políticas de los órganos."},{"term":"fabric","type":"Metáfora","title":"fabric","body":"La constitución o estructura del cuerpo, imaginada como un edificio o sistema organizado."}]},
        {"line":"123–124","speaker":"menenius","en":"What then? ’Fore me, this fellow speaks. What then? What then?","es":"¿Qué pasaría? ¡Por mi vida, este hombre sí que sabe hablar! ¿Y entonces? ¿Entonces?","notes":[{"term":"’Fore me","type":"Lengua","title":"’Fore me","body":"Juramento elíptico, relacionado con fórmulas como «before me»; funciona como exclamación, no como indicación espacial."}]},
        {"line":"125–126","speaker":"citizen2","en":"Should by the cormorant belly be restrained, Who is the sink o’ th’ body—","es":"…se vieran sometidos al vientre voraz, que es el sumidero del cuerpo…","notes":[{"term":"cormorant belly","type":"Imagen","title":"cormorant belly","body":"Cormorant, «cormorán», se usaba figuradamente para alguien insaciable. La imagen atribuye al vientre una voracidad parasitaria."},{"term":"sink","type":"Léxico","title":"sink o’ th’ body","body":"Sumidero o desagüe: el ciudadano convierte el órgano central en receptáculo de desperdicios."}]},
        {"line":"127","speaker":"menenius","en":"Well, what then?","es":"Bien, ¿y entonces?","notes":[]},
        {"line":"128–129","speaker":"citizen2","en":"The former agents, if they did complain, What could the belly answer?","es":"Si esos órganos que realizan todo el trabajo se quejaran, ¿qué podría responderles el vientre?","notes":[{"term":"agents","type":"Léxico","title":"former agents","body":"Los órganos que actúan y desempeñan funciones, mencionados en la enumeración anterior."}]},
        {"line":"130–132","speaker":"menenius","en":"I will tell you, If you’ll bestow a small—of what you have little— Patience awhile, you’st hear the belly’s answer.","es":"Se lo diré, si me concede un poco de algo que tiene muy poco: paciencia. Espere un momento y oirá la respuesta del vientre.","notes":[{"term":"you’st","type":"Lengua histórica","title":"you’st","body":"Forma contraída arcaica con valor futuro, aproximadamente «you shall»; no corresponde al uso moderno."}]},
        {"line":"133","speaker":"citizen2","en":"You’re long about it.","es":"Está tardando demasiado.","notes":[]},
        {"line":"134–149","speaker":"menenius","en":"Note me this, good friend; Your most grave belly was deliberate, Not rash like his accusers, and thus answered: “True is it, my incorporate friends,” quoth he, “That I receive the general food at first Which you do live upon; and fit it is, Because I am the storehouse and the shop Of the whole body. But, if you do remember, I send it through the rivers of your blood Even to the court, the heart, to th’ seat o’ th’ brain; And, through the cranks and offices of man, The strongest nerves and small inferior veins From me receive that natural competency Whereby they live. And though that all at once, You, my good friends”—this says the belly, mark me—","es":"Preste atención, buen amigo: el muy respetable vientre reflexionó antes de responder; no se precipitó como sus acusadores. Y dijo: «Es cierto, amigos míos, miembros de un mismo cuerpo, que soy el primero en recibir el alimento del que ustedes viven. Y así debe ser, porque soy el almacén y el centro de distribución de todo el organismo. Pero recuerden que lo envío por los ríos de la sangre hasta la corte del corazón y la sede del cerebro; y que, a través de los conductos y las distintas dependencias del cuerpo humano, tanto los nervios más robustos como las venas menores reciben de mí la porción necesaria para vivir. Y aunque todos a la vez, queridos amigos…». Esto lo dice el vientre, fíjese bien…","notes":[{"term":"incorporate friends","type":"Retórica","title":"incorporate friends","body":"Incorporate juega con la pertenencia literal a un cuerpo y la integración de los miembros en una comunidad política."},{"term":"storehouse and the shop","type":"Metáfora","title":"almacén y centro de distribución","body":"El vientre se presenta no como consumidor improductivo sino como depósito y proveedor. Shop puede designar un establecimiento de trabajo o distribución, no necesariamente una tienda moderna."},{"term":"court, the heart","type":"Metáfora política","title":"la corte del corazón","body":"La imagen de la corte introduce una jerarquía política dentro de la fisiología alegórica."},{"term":"cranks and offices","type":"Léxico","title":"cranks and offices","body":"Cranks sugiere recodos o conductos; offices, partes con funciones asignadas. La expresión combina anatomía y administración."},{"term":"natural competency","type":"Léxico","title":"natural competency","body":"Competency significa aquí provisión suficiente o porción adecuada para sostener la vida, no capacidad profesional."}]},
        {"line":"150","speaker":"citizen2","en":"Ay, sir, well, well.","es":"Sí, señor, está bien, está bien.","notes":[]},
        {"line":"151–155","speaker":"menenius","en":"“Though all at once cannot See what I do deliver out to each, Yet I can make my audit up, that all From me do back receive the flour of all, And leave me but the bran.” What say you to ’t?","es":"«Aunque no todos puedan ver al mismo tiempo lo que entrego a cada uno, puedo presentar mis cuentas y demostrar que todos reciben de mí lo mejor del alimento, mientras que para mí solo queda el salvado». ¿Qué le parece?","notes":[{"term":"audit","type":"Metáfora contable","title":"make my audit up","body":"El vientre imagina una rendición de cuentas: su contribución puede probarse aunque no sea visible de inmediato."},{"term":"flour","type":"Imagen","title":"flour / bran","body":"La oposición entre la harina fina y el salvado presenta al vientre como distribuidor de la parte nutritiva, que conserva para sí el residuo. Flour puede evocar también flower, «lo mejor»."}]},
        {"line":"156","speaker":"citizen2","en":"It was an answer. How apply you this?","es":"Eso fue una respuesta. ¿Cómo aplica usted esa historia a nuestro caso?","notes":[{"term":"apply","type":"Retórica","title":"How apply you this?","body":"El ciudadano exige la interpretación política de la alegoría: contar una fábula no basta para resolver su queja."}]},
        {"line":"157–164","speaker":"menenius","en":"The senators of Rome are this good belly, And you the mutinous members. For examine Their counsels and their cares, digest things rightly Touching the weal o’ th’ common, you shall find No public benefit which you receive But it proceeds or comes from them to you And no way from yourselves. What do you think, You, the great toe of this assembly?","es":"Los senadores de Roma son ese buen vientre, y ustedes, los miembros amotinados. Examinen sus decisiones y sus desvelos; si consideran debidamente cuanto atañe al bienestar común, descubrirán que todos los beneficios públicos que reciben proceden de ellos, y de ningún modo de ustedes mismos. ¿Qué opinas tú, dedo gordo del pie de esta asamblea?","notes":[{"term":"digest things rightly","type":"Retórica","title":"Digerir el argumento","body":"Digest pasa de la fisiología a la interpretación política: Menenio exige que los ciudadanos examinen correctamente el argumento."},{"term":"weal o’ th’ common","type":"Léxico político","title":"Bienestar común","body":"Weal designa bienestar o prosperidad; common remite a la comunidad."},{"term":"great toe","type":"Retórica","title":"El dedo gordo","body":"La analogía corporal se transforma en una burla jerárquica contra el ciudadano."}]},
        {"line":"165","speaker":"citizen2","en":"I the great toe? Why the great toe?","es":"¿Yo, el dedo gordo? ¿Por qué el dedo gordo?","notes":[]},
        {"line":"166–172","speaker":"menenius","en":"For that, being one o’ th’ lowest, basest, poorest, Of this most wise rebellion, thou goest foremost. Thou rascal, that art worst in blood to run, Lead’st first to win some vantage. But make you ready your stiff bats and clubs. Rome and her rats are at the point of battle; The one side must have bale.","es":"Porque, aunque eres uno de los más bajos, despreciables y pobres de esta sapientísima rebelión, marchas a la cabeza. ¡Canalla! Tú, que eres el menos indicado para correr riesgos, te adelantas para sacar ventaja. Pero preparen sus recios bastones y garrotes: Roma y sus ratas están a punto de combatir. Uno de los dos bandos tendrá que sufrir las consecuencias.","notes":[{"term":"most wise rebellion","type":"Ironía","title":"La rebelión «sapientísima»","body":"El superlativo es irónico: Menenio ridiculiza la prudencia de los sublevados."},{"term":"worst in blood to run","type":"Interpretación","title":"Sangre y riesgo","body":"La imagen de la sangre puede sugerir tanto condición social como disposición para exponerse; la traducción privilegia la idea de riesgo."},{"term":"bale","type":"Léxico histórico","title":"bale","body":"Desgracia, daño o sufrimiento, no el moderno sustantivo «fardo»."}]},
        {"line":"173","speaker":"menenius","en":"Hail, noble Martius.","es":"¡Salve, noble Marcio!","notes":[],"stageBefore":"Entra Cayo Marcio."},
        {"line":"174–176","speaker":"martius","en":"Thanks.—What’s the matter, you dissentious rogues, That, rubbing the poor itch of your opinion, Make yourselves scabs?","es":"Gracias. ¿Qué les pasa, canallas sediciosos? De tanto rascarse esa miserable comezón de sus opiniones, ¿acaban convirtiéndose ustedes mismos en costras?","notes":[{"term":"dissentious rogues","type":"Léxico político","title":"Sedición y desprecio","body":"Dissentious califica a quienes provocan discordia; rogues añade el insulto social. Marcio no pregunta neutralmente por la protesta."},{"term":"itch","type":"Retórica","title":"La opinión como enfermedad","body":"El juego entre picazón, rascarse y costras convierte la discrepancia política en una afección cutánea; scabs también puede sugerir una condición despreciable."}]},
        {"line":"177","speaker":"citizen2","en":"We have ever your good word.","es":"Siempre contamos con sus amables palabras.","notes":[{"term":"good word","type":"Ironía","title":"Una cortesía envenenada","body":"El ciudadano responde irónicamente a los insultos de Marcio: la expresión de gratitud significa aquí lo contrario."}]},
        {"line":"178–200","speaker":"martius","en":"He that will give good words to thee will flatter Beneath abhorring. What would you have, you curs, That like nor peace nor war? The one affrights you; The other makes you proud. He that trusts to you, Where he should find you lions, finds you hares; Where foxes, geese. You are no surer, no, Than is the coal of fire upon the ice Or hailstone in the sun. Your virtue is To make him worthy whose offense subdues him, And curse that justice did it. Who deserves greatness Deserves your hate; and your affections are A sick man’s appetite, who desires most that Which would increase his evil. He that depends Upon your favors swims with fins of lead, And hews down oaks with rushes. Hang you! Trust you? With every minute you do change a mind And call him noble that was now your hate, Him vile that was your garland. What’s the matter, That in these several places of the city You cry against the noble senate, who, Under the gods, keep you in awe, which else Would feed on one another?—What’s their seeking?","es":"Quien te dirija buenas palabras tendrá que adularte más allá de lo que permite el propio asco. ¿Qué quieren, perros, si no les gusta ni la paz ni la guerra? La una los asusta; la otra los vuelve arrogantes. Quien confía en ustedes y espera encontrar leones, encuentra liebres; donde espera zorros, encuentra gansos. No son más constantes que un carbón encendido sobre el hielo o que un granizo bajo el sol. Su virtud consiste en considerar digno al hombre castigado por sus faltas y maldecir a la justicia que lo castigó. Quien merece grandeza merece su odio; sus afectos son como el apetito de un enfermo, que desea precisamente aquello que agravaría su mal. Quien depende de su favor nada con aletas de plomo y pretende talar robles con juncos. ¡Malditos sean! ¿Confiar en ustedes? Cambian de parecer a cada minuto: llaman noble a quien hace un instante odiaban, y vil a quien antes colmaban de honores. ¿Qué ocurre para que, en distintos puntos de la ciudad, protesten contra el noble Senado, que, después de los dioses, los mantiene a raya? Sin él, se devorarían unos a otros. ¿Qué es lo que reclaman?","notes":[{"term":"Beneath abhorring","type":"Interpretación","title":"La adulación y el asco","body":"Construcción comprimida: elogiar a este ciudadano exigiría una adulación que rebaja incluso el umbral de la repugnancia. La traducción explicita esa relación."},{"term":"lions","type":"Retórica","title":"Animales invertidos","body":"La secuencia leones/liebres y zorros/gansos opone valor y astucia a cobardía y necedad, según la valoración de Marcio."},{"term":"coal of fire upon the ice","type":"Imagen","title":"Inestabilidad imposible","body":"El carbón encendido sobre hielo y el granizo al sol figuran estados precarios; ilustran la supuesta inconstancia popular."},{"term":"swims with fins of lead","type":"Retórica","title":"Instrumentos que impiden actuar","body":"Las aletas de plomo y los juncos usados para cortar robles son imágenes de medios contraproducentes, no descripciones literales."},{"term":"your garland","type":"Léxico","title":"Garland","body":"La guirnalda funciona como emblema de honor y reconocimiento público; el contraste con vile intensifica la acusación de volubilidad."},{"term":"Under the gods","type":"Política","title":"Jerarquía de autoridad","body":"Marcio sitúa al Senado inmediatamente después de los dioses como fuerza que contiene a la multitud; es una afirmación del personaje, no una descripción neutral del orden romano."}]},
        {"line":"201–202","speaker":"menenius","en":"For corn at their own rates, whereof they say The city is well stored.","es":"Piden grano al precio que ellos mismos fijen; dicen que la ciudad tiene las reservas bien abastecidas.","notes":[{"term":"at their own rates","type":"Léxico económico","title":"El precio del grano","body":"Rates designa aquí precios o tarifas. La demanda es poder comprar el cereal al precio fijado por los ciudadanos, no recibirlo necesariamente gratis."},{"term":"they say","type":"Retórica","title":"Distancia de Menenio","body":"Menenio presenta la abundancia de grano como una afirmación de los sublevados, sin confirmarla ni refutarla."}]},
        {"line":"203–215","speaker":"martius","en":"Hang ’em! They say? They’ll sit by th’ fire and presume to know What’s done i’ th’ Capitol, who’s like to rise, Who thrives, and who declines; side factions and give out Conjectural marriages, making parties strong And feebling such as stand not in their liking Below their cobbled shoes. They say there’s grain enough? Would the nobility lay aside their ruth And let me use my sword, I’d make a quarry With thousands of these quartered slaves as high As I could pick my lance.","es":"¡Que los cuelguen! ¿Eso dicen? Se quedan sentados junto al fuego y se atreven a presumir que saben qué ocurre en el Capitolio: quién está por ascender, quién prospera y quién cae. Toman partido por unas facciones y anuncian matrimonios imaginarios, fortaleciendo a unos bandos y debilitando a quienes no merecen, a sus ojos, ni estar bajo sus zapatos remendados. ¿Dicen que hay grano suficiente? Si la nobleza dejara a un lado su compasión y me permitiera usar la espada, amontonaría los cuerpos descuartizados de miles de estos miserables hasta donde alcanzara la punta de mi lanza.","notes":[{"term":"side factions","type":"Sintaxis","title":"Tomar partido","body":"Side funciona como verbo: apoyar a una facción. Se enlaza con give out, «difundir» o «anunciar», en una serie de acusaciones contra la presunta intromisión popular en la política."},{"term":"Conjectural marriages","type":"Léxico político","title":"Matrimonios conjeturales","body":"Alude a alianzas matrimoniales que los ciudadanos imaginan o anuncian sin información segura. Marcio les reprocha especular sobre las relaciones de poder."},{"term":"cobbled shoes","type":"Imagen social","title":"Zapatos remendados","body":"Cobbled sugiere calzado reparado: la referencia materializa el desprecio de clase que atraviesa el discurso."},{"term":"ruth","type":"Léxico histórico","title":"ruth","body":"Compasión o piedad. Marcio considera esa clemencia un obstáculo para ejercer violencia contra los ciudadanos."},{"term":"quarry","type":"Imagen bélica","title":"quarry / quartered","body":"Quarry puede designar un montón de animales muertos tras la caza; junto a quartered, «descuartizados», convierte la represión imaginada en una carnicería. La traducción conserva la brutalidad sin identificar quarry con una cantera literal."}]},
        {"line":"216–219","speaker":"menenius","en":"Nay, these are almost thoroughly persuaded; For though abundantly they lack discretion, Yet are they passing cowardly. But I beseech you, What says the other troop?","es":"No, a estos ya casi los hemos convencido por completo; aunque les falta muchísimo juicio, son extraordinariamente cobardes. Pero, te ruego, ¿qué dice el otro grupo?","notes":[{"term":"passing cowardly","type":"Léxico histórico","title":"passing","body":"Passing intensifica el adjetivo: «sumamente» o «extraordinariamente». Menenio no está elogiando la prudencia de los ciudadanos."},{"term":"other troop","type":"Contexto escénico","title":"El otro grupo","body":"Remite al segundo grupo de ciudadanos sublevados, al que Marcio ha encontrado fuera de escena; la pregunta prepara su informe sobre la concesión de tribunos."}]},
        {"line":"220–235","speaker":"martius","en":"They are dissolved. Hang ’em! They said they were an-hungry, sighed forth proverbs That hunger broke stone walls, that dogs must eat, That meat was made for mouths, that the gods sent not Corn for the rich men only. With these shreds They vented their complainings, which being answered And a petition granted them—a strange one, To break the heart of generosity And make bold power look pale—they threw their caps As they would hang them on the horns o’ th’ moon, Shouting their emulation.","es":"Ya se han dispersado. ¡Que los cuelguen! Decían que tenían hambre y suspiraban refranes: que el hambre derriba muros de piedra, que los perros tienen que comer, que la comida se hizo para las bocas y que los dioses no enviaron el grano únicamente para los ricos. Con esos retazos daban salida a sus quejas. Cuando recibieron respuesta y se les concedió una petición —una petición insólita, capaz de quebrantar el ánimo de la nobleza y hacer palidecer al poder más audaz—, lanzaron sus gorros como si quisieran colgarlos de los cuernos de la luna, gritando en su afán de rivalizar.","notes":[{"term":"an-hungry","type":"Lengua histórica","title":"an-hungry","body":"Forma enfática o dialectal de hungry, «hambrientos». Marcio la reproduce con tono despectivo al resumir las quejas populares."},{"term":"meat","type":"Léxico histórico","title":"meat","body":"Aquí significa alimento o comida en general, no exclusivamente carne. El refrán afirma que los alimentos están destinados a ser consumidos."},{"term":"shreds","type":"Retórica","title":"Retazos de refranes","body":"Marcio rebaja las máximas de los ciudadanos a fragmentos inconexos; es una valoración del personaje, no una descripción objetiva de su argumento."},{"term":"generosity","type":"Léxico histórico","title":"generosity","body":"En este contexto remite a nobleza de nacimiento o condición, además de las virtudes que se le atribuyen; no equivale sencillamente a «generosidad» económica."},{"term":"horns o’ th’ moon","type":"Imagen","title":"Los cuernos de la luna","body":"La luna creciente se representa con dos puntas o «cuernos». El gesto exagerado de arrojar los gorros expresa el júbilo que Marcio contempla con desprecio."},{"term":"emulation","type":"Interpretación","title":"emulation","body":"Puede denotar rivalidad, competición o afán de igualarse con otros. La traducción conserva ese matiz competitivo, aunque el contexto también permite entender una exaltación colectiva."}]},
        {"line":"236","speaker":"menenius","en":"What is granted them?","es":"¿Qué les han concedido?","notes":[]},
        {"line":"237–243","speaker":"martius","en":"Five tribunes to defend their vulgar wisdoms, Of their own choice. One’s Junius Brutus, Sicinius Velutus, and I know not. ’Sdeath! The rabble should have first unroofed the city Ere so prevailed with me. It will in time Win upon power and throw forth greater themes For insurrection’s arguing.","es":"Cinco tribunos elegidos por ellos mismos para defender la sabiduría de la plebe. Uno es Junio Bruto; otro, Sicinio Veluto, y no sé quiénes más. ¡Por la muerte de Dios! Antes habría tenido que arrancar los tejados de la ciudad esa chusma que conseguir semejante cosa de mí. Con el tiempo, esto le irá ganando terreno al poder y dará nuevos motivos para justificar la insurrección.","notes":[{"term":"tribunes","type":"Instituciones romanas","title":"Los tribunos de la plebe","body":"Magistrados encargados de representar y proteger a los plebeyos. La concesión es un acontecimiento de la trama y no debe confundirse sin más con la cronología histórica exacta de la institución."},{"term":"vulgar wisdoms","type":"Ironía","title":"La sabiduría «vulgar»","body":"Vulgar se relaciona con el pueblo común. La expresión es despectiva en boca de Marcio, que rechaza la autoridad política de los plebeyos."},{"term":"’Sdeath","type":"Lengua histórica","title":"’Sdeath","body":"Juramento abreviado de God’s death («por la muerte de Dios»). Su forma contraída atenúa gráficamente una invocación blasfema."},{"term":"unroofed","type":"Crítica textual","title":"unroofed","body":"Folger presenta unroofed («dejado sin techo»). La imagen extrema indica que Marcio habría preferido una devastación de Roma antes que ceder; conviene cotejar la lectura con el Folio en una revisión textual integral."},{"term":"Win upon power","type":"Sintaxis","title":"Win upon power","body":"Win upon significa avanzar sobre, imponerse gradualmente a. El sujeto implícito es la concesión política recién mencionada."}]},
        {"line":"244","speaker":"menenius","en":"This is strange.","es":"Esto es extraordinario.","notes":[]},
        {"line":"245","speaker":"martius","en":"Go get you home, you fragments.","es":"Váyanse a casa, pedazos de nada.","notes":[{"term":"fragments","type":"Insulto y metáfora","title":"fragments","body":"Literalmente «fragmentos». Marcio reduce a los ciudadanos a restos sin unidad ni dignidad; la traducción procura conservar la descalificación."}]},
        {"line":"246","speaker":"messenger","en":"Where’s Caius Martius?","es":"¿Dónde está Cayo Marcio?","notes":[]},
        {"line":"247","speaker":"martius","en":"Here. What’s the matter?","es":"Aquí. ¿Qué ocurre?","notes":[]},
        {"line":"248","speaker":"messenger","en":"The news is, sir, the Volsces are in arms.","es":"Señor, llegan noticias de que los volscos están en armas.","notes":[{"term":"Volsces","type":"Contexto","title":"Los volscos","body":"Pueblo itálico rival de Roma. La noticia desplaza el conflicto social hacia una guerra exterior."}]},
        {"line":"249–251","speaker":"martius","en":"I am glad on ’t. Then we shall ha’ means to vent Our musty superfluity. See our best elders.","es":"Me alegra saberlo. Así tendremos ocasión de dar salida a lo que nos sobra y se está echando a perder. Ahí vienen nuestros más ilustres mayores.","notes":[{"term":"vent","type":"Léxico","title":"vent","body":"Dar salida o desahogo. Marcio recibe la guerra como ocasión de descargar un excedente."},{"term":"musty superfluity","type":"Interpretación","title":"Excedente rancio","body":"Musty significa «rancio» y superfluity, «excedente». La frase deja abierto el referente exacto: puede sugerir personas sobrantes o energías estancadas."},{"term":"elders","type":"Léxico","title":"elders","body":"Personas de autoridad o rango superior, no solo de mayor edad."}]},
        {"line":"252–253","speaker":"senator1","en":"Martius, ’tis true that you have lately told us: The Volsces are in arms.","es":"Marcio, se ha confirmado lo que nos advertiste hace poco: los volscos están en armas.","notes":[{"term":"’tis","type":"Lengua","title":"’tis","body":"Contracción de it is, frecuente en el inglés dramático de Shakespeare."}]},
        {"line":"254–258","speaker":"martius","en":"They have a leader, Tullus Aufidius, that will put you to ’t. I sin in envying his nobility, And, were I anything but what I am, I would wish me only he.","es":"Tienen un jefe, Tulo Aufidio, que los pondrá a prueba. Pecaría por envidiar su nobleza; y, si yo pudiera ser alguien distinto de quien soy, solo desearía ser él.","notes":[{"term":"put you to ’t","type":"Léxico","title":"Poner a prueba","body":"Forma abreviada de put you to it: poner en aprietos."},{"term":"I sin in envying","type":"Retórica","title":"Envidia y admiración","body":"Marcio presenta su admiración por el enemigo como una envidia que roza el pecado."},{"term":"were I","type":"Sintaxis","title":"Condicional invertida","body":"Equivale a if I were: inversión del verbo sin la conjunción if."}]}
,
        {"line":"259","speaker":"cominius","en":"You have fought together?","es":"¿Ya se han enfrentado en combate?","notes":[]},
        {"line":"260–263","speaker":"martius","en":"Were half to half the world by th’ ears and he Upon my party, I’d revolt, to make Only my wars with him. He is a lion That I am proud to hunt.","es":"Aunque las dos mitades del mundo estuvieran enfrentadas y él combatiera de mi lado, yo cambiaría de bando con tal de luchar solo contra él. Es un león al que me enorgullece dar caza.","notes":[{"term":"half to half the world","type":"Sintaxis","title":"Las dos mitades del mundo","body":"La construcción condicional invertida were ... expresa una hipótesis extrema: un mundo dividido en dos bandos enfrentados."},{"term":"Upon my party","type":"Léxico histórico","title":"party","body":"Aquí party significa «bando» o «facción», no una celebración ni un partido político moderno."},{"term":"I’d revolt","type":"Interpretación","title":"Cambiar de bando","body":"Marcio declara que incluso abandonaría su propio bando para poder enfrentarse a Aufidio. La hipérbole expresa su obsesión con un adversario digno, no un plan efectivo de traición."},{"term":"lion","type":"Imagen retórica","title":"El león y la caza","body":"La comparación convierte a Aufidio en presa formidable y a Marcio en cazador; combina admiración y deseo de vencerlo."}]},
        {"line":"264–265","speaker":"senator1","en":"Then, worthy Martius, Attend upon Cominius to these wars.","es":"Entonces, digno Marcio, acompaña a Cominio en esta campaña.","notes":[{"term":"Attend upon","type":"Léxico","title":"Attend upon","body":"Significa acompañar o servir bajo las órdenes de alguien; aquí introduce la subordinación militar de Marcio a Cominio."}]},
        {"line":"266","speaker":"cominius","en":"It is your former promise.","es":"Es lo que prometiste anteriormente.","notes":[]},
        {"line":"267–270","speaker":"martius","en":"Sir, it is, And I am constant.—Titus Lartius, thou Shalt see me once more strike at Tullus’ face. What, art thou stiff? Stand’st out?","es":"Así es, señor, y mantengo mi palabra. Tito Larcio, volverás a verme atacar a Tulo de frente. ¿Qué ocurre? ¿Estás rígido? ¿Te niegas a venir?","notes":[{"term":"constant","type":"Léxico","title":"constant","body":"Aquí significa firme y fiel a la promesa, no simplemente «constante» en la repetición de actos."},{"term":"stiff","type":"Interpretación","title":"stiff / Stand’st out?","body":"Marcio interpela a Larcio con dos expresiones que pueden aludir a rigidez física y resistencia a participar. La respuesta de Larcio menciona una muleta, lo que refuerza el primer matiz sin eliminar el segundo."},{"term":"thou","type":"Gramática histórica","title":"thou / shalt / art / stand’st","body":"Las formas de segunda persona singular marcan trato directo y familiar con Larcio. En español se emplea «tú» y sus formas verbales, sin recurrir a «vosotros»."}]},
        {"line":"271–273","speaker":"lartius","en":"No, Caius Martius, I’ll lean upon one crutch and fight with t’ other Ere stay behind this business.","es":"No, Cayo Marcio. Antes de quedarme fuera de esta campaña, me apoyaré en una muleta y lucharé con la otra.","notes":[{"term":"Ere","type":"Sintaxis","title":"Ere stay behind","body":"Ere significa «antes de». El giro elide la repetición de I’ll: Larcio preferiría luchar apoyado en muletas antes que quedarse atrás."},{"term":"crutch","type":"Imagen dramática","title":"Las muletas","body":"La respuesta hace visible la determinación de Larcio mediante una imagen deliberadamente exagerada: combatir incluso con movilidad reducida."}]},
        {"line":"274","speaker":"menenius","en":"O, true bred!","es":"¡Ah, eso es tener auténtica nobleza!","notes":[{"term":"true bred","type":"Léxico e interpretación","title":"true bred","body":"Expresión de elogio al carácter o a la buena casta. La traducción privilegia el elogio de la disposición militar, sin reducirlo a un dato genealógico."}]},
        {"line":"275–276","speaker":"senator1","en":"Your company to th’ Capitol, where I know Our greatest friends attend us.","es":"Acompáñennos al Capitolio, donde sé que nos esperan nuestros aliados más importantes.","notes":[{"term":"friends","type":"Léxico","title":"friends","body":"En este contexto puede designar aliados o partidarios, no solo amigos personales."}]},
        {"line":"277–279","speaker":"lartius","en":"Lead you on.—Follow Cominius. We must follow you; Right worthy you priority.","es":"Adelántate. Sigue a Cominio. Nosotros debemos seguirte a ti: bien mereces ir primero.","notes":[{"term":"Lead you on","type":"Acotación y sintaxis","title":"Dos destinatarios","body":"Folger señala que Larcio dirige primero «Lead you on» a Cominio y después «Follow Cominius» a Marcio. El cambio de interlocutor importa para entender la cortesía y la jerarquía entre los generales."},{"term":"Right worthy you priority","type":"Sintaxis","title":"El derecho a preceder","body":"Orden comprimido: «you are rightly worthy of priority». Larcio reconoce a Marcio un lugar de precedencia por su mérito."}]},
        {"line":"280","speaker":"cominius","en":"Noble Martius.","es":"Noble Marcio.","notes":[]},
        {"line":"281","speaker":"senator1","en":"Hence to your homes, begone.","es":"Regresen a sus casas. ¡Fuera de aquí!","notes":[{"term":"Hence","type":"Léxico","title":"Hence","body":"Adverbio de dirección: «de aquí», «fuera». La orden del senador pone fin a la presencia de los ciudadanos en la reunión."}]},
        {"line":"282–284","speaker":"martius","en":"Nay, let them follow. The Volsces have much corn; take these rats thither To gnaw their garners.","es":"No, que nos sigan. Los volscos tienen mucho grano; lleven allí a estas ratas para que roan sus graneros.","notes":[{"term":"garners","type":"Léxico histórico","title":"garners","body":"Graneros o depósitos de cereal. La palabra prolonga la disputa inicial por el abastecimiento."},{"term":"rats","type":"Retórica","title":"Ratas y grano","body":"Marcio deshumaniza a los ciudadanos comparándolos con roedores que devoran reservas de alimento. La imagen enlaza la guerra exterior con el conflicto del hambre en Roma."}]},
        {"line":"285–286","speaker":"martius","en":"Worshipful mutineers, Your valor puts well forth.—Pray follow.","es":"Honorables amotinados, su valentía se luce de maravilla. Hagan el favor de seguirnos.","stageBefore":"Los ciudadanos se retiran a hurtadillas.","notes":[{"term":"Worshipful","type":"Ironía","title":"Worshipful mutineers","body":"Worshipful es un tratamiento honorífico. Unido a mutineers («amotinados»), produce una cortesía sarcástica."},{"term":"puts well forth","type":"Interpretación","title":"Una valentía puesta en duda","body":"El elogio aparente de la valentía contrasta con la retirada furtiva de los ciudadanos; el efecto es irónico."}]},
        {"line":"287","speaker":"sicinius","en":"Was ever man so proud as is this Martius?","es":"¿Ha existido alguna vez un hombre tan soberbio como este Marcio?","stageBefore":"Salen los demás. Permanecen Sicinio y Bruto.","notes":[]},
        {"line":"288","speaker":"brutus","en":"He has no equal.","es":"No tiene igual.","notes":[]},
        {"line":"289","speaker":"sicinius","en":"When we were chosen tribunes for the people—","es":"Cuando nos eligieron tribunos del pueblo…","notes":[{"term":"tribunes","type":"Contexto institucional","title":"Tribunos de la plebe","body":"Los tribunos representan los intereses de la plebe romana. La elección mencionada aquí es la concesión política que Marcio acaba de condenar."}]},
        {"line":"290","speaker":"brutus","en":"Marked you his lip and eyes?","es":"¿Te fijaste en sus labios y en sus ojos?","notes":[{"term":"Marked you","type":"Sintaxis","title":"Marked you","body":"Interrogativa sin auxiliar do: equivale a «Did you notice…?». La pregunta dirige la atención a los gestos visibles de Marcio."}]},
        {"line":"291","speaker":"sicinius","en":"Nay, but his taunts.","es":"No, pero sí en sus burlas.","notes":[{"term":"taunts","type":"Léxico","title":"taunts","body":"Burlas, provocaciones o palabras despectivas dirigidas a otros. Sicinio responde al gesto con el recuerdo de las palabras."}]},
        {"line":"292","speaker":"brutus","en":"Being moved, he will not spare to gird the gods—","es":"Cuando se altera, ni siquiera se contiene de burlarse de los dioses…","notes":[{"term":"gird","type":"Léxico histórico","title":"gird","body":"Aquí significa ridiculizar o atacar verbalmente, no «ceñir» o «rodear». La expresión describe la falta de freno de Marcio cuando se enoja."}]},
        {"line":"293","speaker":"sicinius","en":"Bemock the modest moon.","es":"Hasta se mofaría de la recatada luna.","notes":[{"term":"modest moon","type":"Personificación","title":"La luna recatada","body":"La luna recibe una cualidad humana, modest («recatada», «pudorosa»). Sicinio prolonga y exagera la acusación de irreverencia iniciada por Bruto."}]},
        {"line":"294–295","speaker":"brutus","en":"The present wars devour him! He is grown Too proud to be so valiant.","es":"¡Que esta guerra se lo trague! Se ha vuelto demasiado soberbio para seguir siendo tan valiente.","notes":[{"term":"devour him","type":"Imagen retórica","title":"La guerra que devora","body":"La guerra aparece personificada como una fuerza que puede engullir a Marcio. Bruto pasa de criticar su conducta a desearle la destrucción."},{"term":"Too proud to be so valiant","type":"Interpretación","title":"Orgullo y valor","body":"Bruto presenta la soberbia como incompatible con el valor que se reconoce a Marcio. La frase expresa su juicio hostil, no una constatación del narrador."}]},
        {"line":"296–300","speaker":"sicinius","en":"Such a nature, Tickled with good success, disdains the shadow Which he treads on at noon. But I do wonder His insolence can brook to be commanded Under Cominius.","es":"Un carácter así, halagado por sus triunfos, desprecia hasta la sombra que pisa al mediodía. Pero me sorprende que su insolencia tolere estar bajo las órdenes de Cominio.","notes":[{"term":"Tickled","type":"Léxico figurado","title":"Tickled with good success","body":"Tickled expresa aquí satisfacción o vanidad estimulada por el éxito, no cosquillas literales."},{"term":"shadow","type":"Hipérbole","title":"Despreciar su propia sombra","body":"La sombra del mediodía es especialmente corta; la imagen exagera el desprecio de Marcio incluso por lo que está bajo sus pies."},{"term":"brook","type":"Léxico histórico","title":"brook","body":"Verbo que aquí significa «tolerar» o «soportar». Sicinio duda de que Marcio acepte una posición subordinada."}]}
,
        {"line":"301–308","speaker":"brutus","en":"Fame, at the which he aims, In whom already he’s well graced, cannot Better be held nor more attained than by A place below the first; for what miscarries Shall be the General’s fault, though he perform To th’ utmost of a man, and giddy censure Will then cry out of Martius “O, if he Had borne the business!”","es":"La fama, a la que aspira y que ya lo favorece tanto, no podría conservarse ni acrecentarse mejor que ocupando el segundo puesto. Porque cualquier fracaso se atribuirá al general, aunque este haga cuanto humanamente pueda; y la opinión, tan voluble, exclamará entonces, hablando de Marcio: «¡Ah, si él hubiera estado al mando!»","notes":[{"term":"In whom","type":"Sintaxis","title":"Antecedente personal","body":"El relativo se refiere a Marcio, no a fame: la fama ya le ha dispensado su favor. La sintaxis intercala esta aclaración antes del verbo principal cannot."},{"term":"A place below the first","type":"Política y retórica","title":"El segundo puesto","body":"Bruto interpreta la subordinación militar como una posición ventajosa para la reputación: Marcio puede recibir elogios sin asumir toda la responsabilidad del mando. Es el razonamiento interesado del tribuno."},{"term":"giddy censure","type":"Léxico histórico","title":"La opinión voluble","body":"Censure significa aquí juicio o valoración pública, no necesariamente censura institucional; giddy añade la idea de inconstancia o ligereza."},{"term":"borne the business","type":"Léxico","title":"Llevar el mando","body":"Bear the business equivale a asumir la responsabilidad de la empresa militar; la exclamación imagina un mando alternativo de Marcio."}]},
        {"line":"309–311","speaker":"sicinius","en":"Besides, if things go well, Opinion that so sticks on Martius shall Of his demerits rob Cominius.","es":"Además, si todo sale bien, la opinión pública, tan apegada a Marcio, despojará a Cominio del reconocimiento que merece.","notes":[{"term":"sticks on","type":"Léxico figurado","title":"Una opinión adherida","body":"La imagen expresa la adhesión persistente de la opinión pública a Marcio."},{"term":"demerits","type":"Semántica histórica","title":"demerits no significa «deméritos»","body":"En este uso temprano, demerits puede designar méritos o servicios dignos de recompensa; el sentido negativo predominante en el inglés moderno invertiría la frase. El pronombre his se refiere aquí a Cominio."}]},
        {"line":"312–316","speaker":"brutus","en":"Come. Half all Cominius’ honors are to Martius, Though Martius earned them not, and all his faults To Martius shall be honors, though indeed In aught he merit not.","es":"Vamos. La mitad de todos los honores de Cominio irá a parar a Marcio, aunque Marcio no los haya ganado; y hasta los errores de Cominio se convertirán en honores para Marcio, aunque este no haya hecho nada para merecerlos.","notes":[{"term":"are to Martius","type":"Sintaxis","title":"Reparto de honores","body":"La construcción indica destino o atribución: los honores terminarán acreditándose a Marcio."},{"term":"all his faults","type":"Referencia pronominal","title":"¿De quién son los errores?","body":"Por el paralelismo con Cominius’ honors, his remite probablemente a Cominio. Bruto insiste en que Marcio gana reputación tanto con los éxitos ajenos como con sus fracasos; la atribución es interpretativa."},{"term":"In aught","type":"Léxico histórico","title":"In aught","body":"Aught significa «algo» o «cosa alguna»; aquí refuerza que Marcio podría recibir crédito sin mérito propio."}]},
        {"line":"317–320","speaker":"sicinius","en":"Let’s hence and hear How the dispatch is made, and in what fashion, More than his singularity, he goes Upon this present action.","es":"Vayámonos a averiguar cómo se organiza la partida y de qué manera, aparte de su habitual extravagancia, emprende esta campaña.","notes":[{"term":"dispatch","type":"Léxico","title":"La organización de la partida","body":"Dispatch puede referirse al despacho o preparación diligente de los asuntos; aquí alude a cómo se dispone la expedición."},{"term":"singularity","type":"Interpretación","title":"Singularidad de Marcio","body":"Singularity puede denotar carácter excepcional, conducta peculiar o afán de distinguirse. «Extravagancia» explicita el juicio crítico de Sicinio, sin reducir la palabra a una sola acepción posible."}]},
        {"line":"321","speaker":"brutus","en":"Let’s along.","es":"Vamos.","notes":[],"stageAfter":"Salen Sicinio y Bruto. Fin de la escena primera."}
      ]
    }
  ,{
  "id": "coriolanus-1-2",
  "workId": "coriolanus",
  "act": 1,
  "scene": 2,
  "place": "Corioles · Cámara del Senado",
  "sourceRef": "Folger Shakespeare Library · Acto I, escena 2",
  "sectionLabel": "Edición en curso · líneas Folger 322–364",
  "introduction": "En Corioles, Aufidio advierte a los senadores volscos de que Roma conoce sus preparativos militares. Una carta interceptada o recibida desde Roma confirma sus sospechas.",
  "stage": "Entran Tulo Aufidio y senadores de Corioles.",
  "characters": [
    {
      "id": "senator1",
      "name": "Primer senador",
      "english": "First Senator",
      "identity": "Senador volsco de Corioles que consulta a Aufidio sobre los planes romanos.",
      "color": "ink"
    },
    {
      "id": "aufidius",
      "name": "Tulo Aufidio",
      "english": "Tullus Aufidius",
      "identity": "Comandante volsco y rival militar de Cayo Marcio.",
      "color": "violet"
    },
    {
      "id": "senator2", "name": "Segundo senador", "english": "Second Senator", "identity": "Senador volsco que encarga a Aufidio dirigir las tropas y confía en la defensa de Corioles.", "color": "olive"
    }
  ],
  "blocks": [
    {
      "line": "322–324",
      "speaker": "senator1",
      "en": "So, your opinion is, Aufidius, That they of Rome are entered in our counsels And know how we proceed.",
      "es": "Así pues, Aufidio, ¿opinas que los romanos se han infiltrado en nuestras deliberaciones y saben cómo pensamos actuar?",
      "notes": [
        {
          "term": "entered in our counsels",
          "type": "Léxico y sintaxis",
          "title": "Penetrar en los planes",
          "body": "Entered in significa aquí haber tenido acceso a información reservada; counsels designa deliberaciones o planes, no consejeros."
        }
      ]
    },
    {
      "line": "325–340",
      "speaker": "aufidius",
      "en": "Is it not yours? Whatever have been thought on in this state That could be brought to bodily act ere Rome Had circumvention? ’Tis not four days gone Since I heard thence. These are the words—I think I have the letter here. Yes, here it is. They have pressed a power, but it is not known Whether for east or west. The dearth is great. The people mutinous; and, it is rumored, Cominius, Martius your old enemy, Who is of Rome worse hated than of you, And Titus Lartius, a most valiant Roman, These three lead on this preparation Whither ’tis bent. Most likely ’tis for you. Consider of it.",
      "es": "¿Acaso tú no lo crees? ¿Qué se ha proyectado en este Estado que pudiera llevarse a la práctica antes de que Roma lo descubriera? No hace ni cuatro días que recibí noticias de allí. Estas son las palabras… Creo que tengo la carta aquí. Sí, aquí está. «Han reclutado un ejército, pero no se sabe si se dirige al este o al oeste. La escasez de alimentos es grave y el pueblo está amotinado. Se rumorea que Cominio, Marcio —tu antiguo enemigo, más odiado en Roma que por ti— y Tito Larcio, un romano muy valeroso, encabezan los preparativos, sea cual sea su destino. Lo más probable es que vengan contra ustedes. Ténganlo en cuenta».",
      "notes": [
        {
          "term": "bodily act",
          "type": "Léxico",
          "title": "De la intención al hecho",
          "body": "Bodily act contrapone la ejecución material de un plan a su mera concepción."
        },
        {
          "term": "circumvention",
          "type": "Semántica histórica",
          "title": "Descubrimiento preventivo",
          "body": "Circumvention puede implicar anticipación y frustración de los planes; Aufidio reprocha que Roma se haya adelantado a sus movimientos."
        },
        {
          "term": "pressed a power",
          "type": "Léxico militar",
          "title": "Leva de tropas",
          "body": "Pressed se refiere a reclutar o movilizar hombres para el servicio militar; power significa aquí fuerza armada."
        },
        {
          "term": "Who is of Rome worse hated than of you",
          "type": "Sintaxis",
          "title": "Una comparación provocadora",
          "body": "Of Rome y of you introducen los agentes del odio: Marcio es, según la carta, más odiado por los romanos que por el propio Aufidio. Es una afirmación del informante, no una verdad corroborada por la escena."
        },
        {
          "term": "Consider of it",
          "type": "Gramática histórica",
          "title": "Consider of",
          "body": "La preposición of acompaña aquí a consider; en el inglés actual suele omitirse al emplear el verbo transitivamente."
        }
      ],
      "stageBefore": "Aufidio saca una carta y la lee."
    },
    {
      "line": "341–343",
      "speaker": "senator1",
      "en": "Our army’s in the field. We never yet made doubt but Rome was ready To answer us.",
      "es": "Nuestro ejército ya está en campaña. Nunca hemos dudado de que Roma estuviera preparada para responder a nuestro ataque.",
      "notes": [
        {
          "term": "made doubt but",
          "type": "Sintaxis histórica",
          "title": "No dudar de que",
          "body": "La secuencia negativa never ... doubt but equivale a «nunca dudamos de que»; but no expresa aquí una excepción adversativa."
        }
      ]
    },
    {
      "line": "344–351",
      "speaker": "aufidius",
      "en": "Nor did you think it folly To keep your great pretenses veiled till when They needs must show themselves, which, in the hatching, It seemed, appeared to Rome. By the discovery We shall be shortened in our aim, which was To take in many towns ere almost Rome Should know we were afoot.",
      "es": "¿Y tampoco les pareció una imprudencia mantener ocultos sus grandes proyectos hasta que fuera inevitable revelarlos? Por lo visto, Roma los descubrió cuando apenas estaban gestándose. Ese descubrimiento frustrará parte de nuestro propósito: apoderarnos de muchas ciudades antes de que Roma llegara siquiera a saber que nos habíamos puesto en marcha.",
      "notes": [
        {
          "term": "pretenses",
          "type": "Semántica histórica",
          "title": "pretenses",
          "body": "Aquí son propósitos o planes declarados como pretensiones; no necesariamente engaños o fingimientos en el sentido moderno."
        },
        {
          "term": "needs must",
          "type": "Gramática histórica",
          "title": "needs must",
          "body": "Construcción modal enfática: «necesariamente», «por fuerza». La revelación de los planes se presenta como inevitable."
        },
        {
          "term": "in the hatching",
          "type": "Imagen retórica",
          "title": "Planes en gestación",
          "body": "La metáfora del huevo que empieza a incubarse subraya que los romanos conocieron la operación antes de que estuviera madura."
        },
        {
          "term": "take in",
          "type": "Léxico militar",
          "title": "take in many towns",
          "body": "Take in significa aquí tomar o conquistar ciudades, no acogerlas ni comprenderlas."
        },
        {
          "term": "afoot",
          "type": "Léxico",
          "title": "afoot",
          "body": "Estar en marcha, haber iniciado una operación; no se refiere literalmente a combatir a pie."
        }
      ]
    },
    {
      "line": "352–357",
      "speaker": "senator2",
      "en": "Noble Aufidius, Take your commission; hie you to your bands. Let us alone to guard Corioles. If they set down before ’s, for the remove Bring up your army. But I think you’ll find They’ve not prepared for us.",
      "es": "Noble Aufidio, recibe tu nombramiento y ve sin demora a reunirte con tus tropas. Déjanos a nosotros la defensa de Corioles. Si los romanos acampan ante nuestras murallas, trae tu ejército para obligarlos a levantar el sitio. Aunque creo que descubrirás que no están preparados para enfrentarse a nosotros.",
      "notes": [
        {
          "term": "commission",
          "type": "Léxico militar",
          "title": "commission",
          "body": "Designa el encargo o autoridad formal para mandar tropas, no una comisión deliberativa."
        },
        {
          "term": "hie you",
          "type": "Gramática histórica",
          "title": "hie you",
          "body": "Imperativo reflexivo arcaico que expresa urgencia: «date prisa», «ve enseguida»."
        },
        {
          "term": "bands",
          "type": "Léxico militar",
          "title": "bands",
          "body": "Grupos organizados de soldados; aquí, las tropas bajo el mando de Aufidio."
        },
        {
          "term": "set down before ’s",
          "type": "Léxico militar",
          "title": "Acampar ante la ciudad",
          "body": "Set down before us significa establecer posiciones frente a la ciudad, potencialmente para sitiarla; ’s es la contracción de us."
        },
        {
          "term": "for the remove",
          "type": "Interpretación",
          "title": "Levantar el sitio",
          "body": "La frase es elíptica: el senador pide traer refuerzos para forzar la retirada de los romanos. «Levantar el sitio» explicita ese resultado probable."
        }
      ]
    },
    {
      "line": "358–364",
      "speaker": "aufidius",
      "en": "O, doubt not that; I speak from certainties. Nay, more, Some parcels of their power are forth already, And only hitherward. I leave your Honors. If we and Caius Martius chance to meet, ’Tis sworn between us we shall ever strike Till one can do no more.",
      "es": "No lo duden: hablo con información segura. Es más, algunas unidades de su ejército ya han partido, y vienen precisamente hacia aquí. Me despido de sus señorías. Si Cayo Marcio y yo llegamos a encontrarnos, nos hemos jurado combatir sin tregua hasta que uno de los dos no pueda seguir luchando.",
      "notes": [
        {
          "term": "parcels of their power",
          "type": "Léxico militar",
          "title": "Unidades del ejército",
          "body": "Parcels son porciones o destacamentos de la fuerza militar, no paquetes materiales."
        },
        {
          "term": "only hitherward",
          "type": "Sintaxis y deixis",
          "title": "Hacia aquí",
          "body": "Hitherward indica dirección hacia el lugar donde hablan; only refuerza la exclusividad de ese destino."
        },
        {
          "term": "your Honors",
          "type": "Tratamiento",
          "title": "Sus señorías",
          "body": "Fórmula de respeto dirigida a los senadores como cuerpo; no es una referencia abstracta a su honor personal."
        },
        {
          "term": "’Tis sworn between us",
          "type": "Retórica",
          "title": "Juramento entre enemigos",
          "body": "Aufidio presenta la rivalidad con Marcio como un compromiso recíproco de combate a muerte. La escena no muestra cuándo ni cómo se formuló ese juramento."
        }
      ]
    }
  ]
}
  ]
};