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
      sceneIds: ["coriolanus-1-1", "coriolanus-1-2", "coriolanus-1-3", "coriolanus-1-4"]
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
  "sectionLabel": "Escena completa · líneas Folger 322–369",
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
    },
{
      "line": "365",
      "speaker": "all",
      "en": "The gods assist you!",
      "es": "¡Que los dioses te ayuden!",
      "notes": [
            {
                  "term": "The gods",
                  "type": "Contexto religioso",
                  "title": "Invocación a los dioses",
                  "body": "La despedida adopta la forma de un deseo de protección divina. La referencia es plural, acorde con el marco religioso romano de la acción."
            }
      ]
},
{
      "line": "366",
      "speaker": "aufidius",
      "en": "And keep your Honors safe!",
      "es": "¡Y que protejan a sus señorías!",
      "notes": [
            {
                  "term": "And keep",
                  "type": "Sintaxis",
                  "title": "Elipsis del sujeto",
                  "body": "El sujeto de keep se recupera de la intervención anterior: son los dioses quienes deben proteger a los senadores. La réplica forma una sola fórmula de despedida con el parlamento precedente."
            }
      ]
},
{
      "line": "367",
      "speaker": "senator1",
      "en": "Farewell.",
      "es": "Adiós.",
      "notes": []
},
{
      "line": "368",
      "speaker": "senator2",
      "en": "Farewell.",
      "es": "Adiós.",
      "notes": []
},
{
      "line": "369",
      "speaker": "all",
      "en": "Farewell.",
      "es": "Adiós.",
      "notes": [],
      "stageAfter": "Salen todos."
}
  ]
},
{
  "id": "coriolanus-1-3",
  "workId": "coriolanus",
  "act": 1,
  "scene": 3,
  "place": "Roma · Casa de Cayo Marcio",
  "sourceRef": "Folger Shakespeare Library · Acto I, escena 3",
  "sectionLabel": "Edición en curso · líneas Folger 370–458",
  "introduction": "Volumnia y Virgilia contraponen la gloria militar y el temor por la vida de Marcio.",
  "stage": "Entran Volumnia y Virgilia, madre y esposa de Marcio. Se sientan en dos taburetes bajos y cosen.",
  "characters": [
    {
      "id": "volumnia",
      "name": "Volumnia",
      "english": "Volumnia",
      "identity": "Madre de Cayo Marcio; considera el honor militar el mayor bien de su hijo.",
      "color": "copper"
    },
    {
      "id": "virgilia",
      "name": "Virgilia",
      "english": "Virgilia",
      "identity": "Esposa de Cayo Marcio; teme por su vida mientras combate.",
      "color": "olive"
    }
  ],
  "blocks": [
    {
      "line": "370–387",
      "speaker": "volumnia",
      "en": "I pray you, daughter, sing, or express yourself in a more comfortable sort. If my son were my husband, I should freelier rejoice in that absence wherein he won honor than in the embracements of his bed where he would show most love. When yet he was but tender-bodied and the only son of my womb, when youth with comeliness plucked all gaze his way, when for a day of kings’ entreaties a mother should not sell him an hour from her beholding, I, considering how honor would become such a person—that it was no better than picture-like to hang by th’ wall, if renown made it not stir—was pleased to let him seek danger where he was like to find fame. To a cruel war I sent him, from whence he returned, his brows bound with oak. I tell thee, daughter, I sprang not more in joy at first hearing he was a man-child than now in first seeing he had proved himself a man.",
      "es": "Te ruego, hija, que cantes o que te muestres más animada. Si mi hijo fuera mi esposo, me alegraría más de su ausencia, si en ella ganara honor, que de los abrazos de su lecho, donde podría demostrarme todo su amor. Cuando todavía era un niño de cuerpo delicado, el único hijo que había dado a luz; cuando su juventud y su belleza atraían todas las miradas; cuando ninguna madre habría aceptado, ni siquiera a ruegos de reyes, perderlo de vista una hora a cambio de un día entero, pensé en cuánto le sentaría el honor a alguien como él. Sin la fama que le diera vida, habría sido poco más que una figura colgada en la pared. Por eso consentí en que buscara el peligro allí donde podía alcanzar la gloria. Lo envié a una guerra cruel y regresó con las sienes coronadas de hojas de roble. Te aseguro, hija, que no salté de mayor alegría al saber por primera vez que había dado a luz a un varón que cuando vi que había demostrado ser un hombre.",
      "notes": [
        {
          "term": "comfortable sort",
          "type": "Léxico histórico",
          "title": "Comfortable",
          "body": "Aquí no significa comodidad física: Volumnia pide una disposición de ánimo más animosa."
        },
        {
          "term": "freelier",
          "type": "Gramática histórica",
          "title": "Comparativo en -er",
          "body": "Comparativo de freely: «más gustosamente»."
        },
        {
          "term": "If my son were my husband",
          "type": "Retórica",
          "title": "Madre y esposa",
          "body": "Volumnia imagina ocupar el lugar de Virgilia para anteponer la gloria pública a la intimidad conyugal."
        },
        {
          "term": "picture-like",
          "type": "Imagen",
          "title": "Figura inmóvil",
          "body": "Sin la fama, la belleza juvenil quedaría reducida a una imagen colgada de la pared."
        },
        {
          "term": "bound with oak",
          "type": "Contexto romano",
          "title": "Corona de roble",
          "body": "Alude a una distinción militar romana de hojas de roble, asociada especialmente con salvar a un ciudadano."
        },
        {
          "term": "man-child",
          "type": "Semántica",
          "title": "Varón y hombre",
          "body": "El contraste pasa de haber nacido varón a haber demostrado hombría en combate."
        }
      ]
    },
    {
      "line": "388–389",
      "speaker": "virgilia",
      "en": "But had he died in the business, madam, how then?",
      "es": "Pero, señora, ¿y si hubiera muerto en aquella empresa? ¿Qué habría pasado entonces?",
      "notes": [
        {
          "term": "had he died",
          "type": "Sintaxis histórica",
          "title": "Condicional sin if",
          "body": "La inversión de had y el sujeto equivale a «if he had died»."
        },
        {
          "term": "the business",
          "type": "Léxico",
          "title": "La empresa",
          "body": "Designa la campaña militar, no un negocio comercial."
        }
      ]
    },
    {
      "line": "390–396",
      "speaker": "volumnia",
      "en": "Then his good report should have been my son; I therein would have found issue. Hear me profess sincerely: had I a dozen sons, each in my love alike and none less dear than thine and my good Martius, I had rather had eleven die nobly for their country than one voluptuously surfeit out of action.",
      "es": "Entonces su buena fama habría sido mi hijo; en ella habría encontrado descendencia. Escucha lo que afirmo con toda sinceridad: si tuviera doce hijos, a todos igualmente queridos y ninguno menos amado que tu esposo, mi buen Marcio, preferiría que once murieran noblemente por su patria antes que ver a uno solo entregarse a los placeres hasta hartarse, sin hacer nada.",
      "notes": [
        {
          "term": "good report",
          "type": "Léxico",
          "title": "La fama que sobrevive",
          "body": "Report designa aquí la reputación pública del muerto, no un informe. Volumnia convierte metafóricamente la fama póstuma en sustituto del hijo."
        },
        {
          "term": "issue",
          "type": "Semántica histórica",
          "title": "Descendencia",
          "body": "Issue significa prole o descendencia: Volumnia prolonga la metáfora al imaginar la reputación de Marcio como su descendiente."
        },
        {
          "term": "had I a dozen sons",
          "type": "Sintaxis",
          "title": "Condicional invertida",
          "body": "Had I equivale a if I had; la inversión introduce una hipótesis sin la conjunción if."
        },
        {
          "term": "thine",
          "type": "Gramática histórica",
          "title": "Posesivo singular",
          "body": "Thine es posesivo de segunda persona singular; Volumnia se dirige a Virgilia, esposa de Marcio."
        },
        {
          "term": "voluptuously surfeit out of action",
          "type": "Léxico y retórica",
          "title": "Hastío de placeres e inacción",
          "body": "Surfeit implica exceso hasta la saciedad. La expresión opone el morir noblemente en servicio activo a consumir la vida en placeres e inactividad; no alude a una muerte por indigestión literal."
        }
      ]
    },
    {
      "line": "397–398",
      "speaker": "gentlewoman",
      "stageBefore": "Entra una dama de compañía.",
      "en": "Madam, the Lady Valeria is come to visit you.",
      "es": "Señora, lady Valeria ha venido a visitarla.",
      "notes": [
        {
          "term": "is come",
          "type": "Gramática histórica",
          "title": "Perfecto con be",
          "body": "Is come emplea be como auxiliar de un verbo de movimiento, construcción frecuente en inglés de la época; en español se expresa naturalmente como «ha venido»."
        }
      ]
    },
    {
      "line": "399",
      "speaker": "virgilia",
      "en": "Beseech you, give me leave to retire myself.",
      "es": "Le ruego que me permita retirarme.",
      "notes": [
        {
          "term": "Beseech you",
          "type": "Sintaxis",
          "title": "Sujeto omitido",
          "body": "Se sobreentiende I: «I beseech you». Es una fórmula cortés de petición."
        }
      ]
    },
    {
      "line": "400–409",
      "speaker": "volumnia",
      "en": "Indeed you shall not. Methinks I hear hither your husband’s drum, See him pluck Aufidius down by th’ hair; As children from a bear, the Volsces shunning him. Methinks I see him stamp thus and call thus: “Come on, you cowards! You were got in fear, Though you were born in Rome.” His bloody brow With his mailed hand then wiping, forth he goes Like to a harvestman ⌜that’s⌝ tasked to mow Or all or lose his hire.",
      "es": "De ningún modo te retirarás. Me parece oír llegar hasta aquí el tambor de tu esposo; lo veo derribar a Aufidio tirándole del cabello, mientras los volscos huyen de él como niños de un oso. Me parece verlo pisotear el suelo y gritar: «¡Vengan, cobardes! Aunque nacieron en Roma, fueron engendrados por el miedo». Luego se limpia la frente ensangrentada con la mano cubierta por el guantelete y sigue adelante, como un segador obligado a cortar toda la cosecha o perder su jornal.",
      "notes": [
        {
          "term": "Methinks",
          "type": "Gramática histórica",
          "title": "Me parece",
          "body": "Methinks es una construcción impersonal: «me parece». Su repetición organiza la visión imaginaria de Volumnia, que no presencia la batalla."
        },
        {
          "term": "As children from a bear",
          "type": "Imagen",
          "title": "La huida ante el oso",
          "body": "La comparación presenta a los volscos como niños que escapan aterrados de un oso; intensifica el carácter casi monstruoso que Volumnia atribuye a su hijo en combate."
        },
        {
          "term": "You were got in fear",
          "type": "Léxico",
          "title": "Engendrados en el miedo",
          "body": "Got tiene aquí el valor de «engendrados». Volumnia imagina a Marcio acusando a sus enemigos de cobardía innata."
        },
        {
          "term": "mailed hand",
          "type": "Léxico militar",
          "title": "Mano protegida por malla",
          "body": "Mailed significa cubierta de armadura de malla, no «enviada por correo»; la traducción usa «guantelete» como aproximación visual."
        },
        {
          "term": "harvestman",
          "type": "Imagen",
          "title": "El segador",
          "body": "La comparación con un trabajador obligado a segar todo el campo traslada la violencia de la batalla a una tarea exhaustiva remunerada."
        },
        {
          "term": "⌜that’s⌝",
          "type": "Crítica textual",
          "title": "Suplemento editorial",
          "body": "Los corchetes angulares de Folger señalan una intervención editorial en la lectura; no deben confundirse con signos pronunciados por el personaje."
        }
      ]
    },
{
    "line": "410",
    "speaker": "virgilia",
    "en": "His bloody brow? O Jupiter, no blood!",
    "es": "¿Su frente ensangrentada? ¡Oh, Júpiter, que no haya sangre!",
    "notes": [
        {
            "term": "O Jupiter",
            "type": "Invocación",
            "title": "Júpiter",
            "body": "Virgilia invoca al dios supremo romano en una súplica que contrasta con la exaltación bélica de Volumnia."
        }
    ]
},
{
    "line": "411–416",
    "speaker": "volumnia",
    "en": "Away, you fool! It more becomes a man Than gilt his trophy. The breasts of Hecuba, When she did suckle Hector, looked not lovelier Than Hector’s forehead when it spit forth blood At Grecian sword, contemning.—Tell Valeria We are fit to bid her welcome.",
    "es": "¡Basta, necia! La sangre le sienta mejor a un hombre que el dorado a su trofeo. Los pechos de Hécuba, cuando amamantaba a Héctor, no eran más hermosos que la frente de Héctor cuando, desafiando una espada griega, brotaba sangre de ella. Dile a Valeria que estamos listas para recibirla.",
    "stageAfter": "Sale la dama de compañía.",
    "notes": [
        {
            "term": "becomes",
            "type": "Léxico",
            "title": "Sentar bien",
            "body": "Become significa aquí «favorecer» o «sentar bien», no «convertirse en»."
        },
        {
            "term": "gilt his trophy",
            "type": "Imagen",
            "title": "El dorado y la sangre",
            "body": "Volumnia compara la sangre que adorna al combatiente con el dorado que embellece un trofeo: una valoración estética deliberadamente provocadora."
        },
        {
            "term": "Hecuba",
            "type": "Mitología",
            "title": "Hécuba y Héctor",
            "body": "Hécuba es la madre de Héctor, defensor de Troya. La imagen opone la lactancia materna a la sangre del guerrero adulto."
        },
        {
            "term": "contemning",
            "type": "Sintaxis e interpretación",
            "title": "Desafiando",
            "body": "El participio expresa desprecio o desafío ante la espada griega; la puntuación permite cierta ambigüedad sobre la relación exacta con la acción de sangrar."
        }
    ]
},
{
    "line": "417",
    "speaker": "virgilia",
    "en": "Heavens bless my lord from fell Aufidius!",
    "es": "¡Que los cielos protejan a mi esposo del feroz Aufidio!",
    "notes": [
        {
            "term": "fell",
            "type": "Léxico histórico",
            "title": "Feroz",
            "body": "Fell, aplicado a Aufidio, significa «cruel» o «feroz», no el pasado de fall."
        }
    ]
},
{
    "line": "418–419",
    "speaker": "volumnia",
    "en": "He’ll beat Aufidius’ head below his knee And tread upon his neck.",
    "es": "Le hundirá a Aufidio la cabeza por debajo de la rodilla y le pisoteará el cuello.",
    "notes": [
        {
            "term": "below his knee",
            "type": "Imagen",
            "title": "Humillación física",
            "body": "La imagen exagera la derrota del adversario hasta representarlo literalmente sometido bajo el cuerpo de Marcio."
        }
    ]
},
{
    "line": "420",
    "speaker": "valeria",
    "stageBefore": "Entra Valeria acompañada por un ujier y una dama de compañía.",
    "en": "My ladies both, good day to you.",
    "es": "Buenos días a las dos, señoras.",
    "notes": []
},
{
    "line": "421",
    "speaker": "volumnia",
    "en": "Sweet madam.",
    "es": "Mi querida señora.",
    "notes": []
},
{
    "line": "422",
    "speaker": "virgilia",
    "en": "I am glad to see your Ladyship.",
    "es": "Me alegra verla, señora.",
    "notes": [
        {
            "term": "your Ladyship",
            "type": "Tratamiento",
            "title": "Fórmula de cortesía",
            "body": "Tratamiento respetuoso dirigido a una mujer de posición social elevada; se evita traducirlo literalmente como «su señoría» para conservar la naturalidad del diálogo."
        }
    ]
},
{
    "line": "423–425",
    "speaker": "valeria",
    "en": "How do you both? You are manifest housekeepers. What are you sewing here? A fine spot, in good faith. How does your little son?",
    "es": "¿Cómo están las dos? Se ve que son muy hogareñas. ¿Qué están bordando? Un trabajo delicado, de veras. ¿Cómo está tu hijito?",
    "notes": [
        {
            "term": "manifest housekeepers",
            "type": "Léxico y tono",
            "title": "Mujeres de casa",
            "body": "Valeria comenta, con un matiz juguetón, que las encuentra ocupadas en labores domésticas; housekeepers no significa aquí empleadas de limpieza."
        },
        {
            "term": "spot",
            "type": "Léxico",
            "title": "Motivo bordado",
            "body": "Spot puede referirse a un pequeño motivo ornamental de la labor de aguja, no necesariamente a una mancha."
        }
    ]
},
{
  "line": "426",
  "speaker": "virgilia",
  "en": "I thank your Ladyship; well, good madam.",
  "es": "Gracias por preguntar, señora. Está bien.",
  "notes": [
    {
      "term": "your Ladyship",
      "type": "Tratamiento",
      "title": "Fórmula de cortesía",
      "body": "Tratamiento respetuoso a Valeria, sin equivalente literal natural en español."
    }
  ]
},
{
  "line": "427–428",
  "speaker": "volumnia",
  "en": "He had rather see the swords and hear a drum than look upon his schoolmaster.",
  "es": "Prefiere ver espadas y oír un tambor antes que mirar a su maestro.",
  "notes": [
    {
      "term": "had rather",
      "type": "Gramática histórica",
      "title": "Preferencia",
      "body": "Had rather equivale a would rather. Volumnia celebra la inclinación bélica del niño."
    }
  ]
},
{
  "line": "429–437",
  "speaker": "valeria",
  "en": "O’ my word, the father’s son! I’ll swear ’tis a very pretty boy. O’ my troth, I looked upon him o’ Wednesday half an hour together. H’as such a confirmed countenance. I saw him run after a gilded butterfly, and when he caught it, he let it go again, and after it again, and over and over he comes, and up again, catched it again. Or whether his fall enraged him or how ’twas, he did so set his teeth and tear it. O, I warrant how he mammocked it!",
  "es": "¡Por mi palabra, es igual que su padre! Juro que es un niño encantador. El miércoles lo estuve observando durante media hora seguida. Tiene una expresión tan resuelta... Lo vi perseguir una mariposa dorada; cuando la atrapó, la soltó y volvió a correr tras ella. Una y otra vez se caía, se levantaba y volvía a atraparla. No sé si lo enfureció alguna caída o qué ocurrió, pero apretó los dientes y la despedazó. ¡Vaya si la hizo pedazos!",
  "notes": [
    {
      "term": "the father’s son",
      "type": "Retórica",
      "title": "De tal padre, tal hijo",
      "body": "Valeria interpreta el comportamiento del niño como reproducción del temperamento paterno: es su juicio, no una afirmación del editor."
    },
    {
      "term": "confirmed countenance",
      "type": "Léxico",
      "title": "Expresión firme",
      "body": "Confirmed sugiere firmeza o determinación en el rostro del niño."
    },
    {
      "term": "gilded butterfly",
      "type": "Léxico",
      "title": "Mariposa dorada",
      "body": "Gilded puede describir el brillo dorado, sin implicar un baño de oro literal."
    },
    {
      "term": "catched",
      "type": "Gramática histórica",
      "title": "Pasado de catch",
      "body": "Catched es una forma histórica del pasado de catch; hoy predomina caught."
    },
    {
      "term": "mammocked",
      "type": "Léxico histórico",
      "title": "Hacer pedazos",
      "body": "Mammock significa despedazar o destrozar. El juego infantil culmina en una imagen de violencia."
    }
  ]
},
{
  "line": "438",
  "speaker": "volumnia",
  "en": "One on ’s father’s moods.",
  "es": "Uno de los arrebatos de su padre.",
  "notes": [
    {
      "term": "on ’s",
      "type": "Gramática histórica",
      "title": "Contracción",
      "body": "On ’s representa aquí «of his»; Volumnia reconoce en el niño el carácter de Marcio."
    }
  ]
},
{
  "line": "439",
  "speaker": "valeria",
  "en": "Indeed, la, ’tis a noble child.",
  "es": "Desde luego, ¡vaya que es un niño noble!",
  "notes": [
    {
      "term": "la",
      "type": "Partícula discursiva",
      "title": "Interjección",
      "body": "La es una partícula exclamativa coloquial que refuerza la afirmación."
    }
  ]
},
{
  "line": "440",
  "speaker": "virgilia",
  "en": "A crack, madam.",
  "es": "Un pequeño travieso, señora.",
  "notes": [
    {
      "term": "crack",
      "type": "Léxico histórico",
      "title": "Muchacho travieso",
      "body": "Crack puede designar a un muchacho pícaro o travieso; Virgilia matiza el elogio."
    }
  ]
},
{
  "line": "441–442",
  "speaker": "valeria",
  "en": "Come, lay aside your stitchery. I must have you play the idle huswife with me this afternoon.",
  "es": "Vamos, deja la costura. Esta tarde quiero que vengas conmigo a hacer de mujer ociosa.",
  "notes": [
    {
      "term": "stitchery",
      "type": "Léxico",
      "title": "Labores de aguja",
      "body": "Stitchery designa la costura o el bordado que están realizando las mujeres."
    },
    {
      "term": "idle huswife",
      "type": "Tono e interpretación",
      "title": "La mujer ociosa",
      "body": "Huswife es una forma histórica de housewife. Valeria juega con la oposición entre las labores domésticas y una tarde de ocio; no constituye necesariamente un insulto."
    }
  ]
},
{
  "line": "443",
  "speaker": "virgilia",
  "en": "No, good madam, I will not out of doors.",
  "es": "No, querida señora, no saldré de casa.",
  "notes": [
    {
      "term": "will not out",
      "type": "Sintaxis",
      "title": "Verbo de movimiento omitido",
      "body": "La construcción omite go: «I will not [go] out of doors». La negativa es tajante."
    }
  ]
},
{
  "line": "444",
  "speaker": "valeria",
  "en": "Not out of doors?",
  "es": "¿No saldrás de casa?",
  "notes": []
},
{
  "line": "445",
  "speaker": "volumnia",
  "en": "She shall, she shall.",
  "es": "Sí saldrá, sí saldrá.",
  "notes": [
    {
      "term": "shall",
      "type": "Modalidad",
      "title": "Voluntad de Volumnia",
      "body": "Shall expresa aquí la determinación de Volumnia respecto de lo que hará Virgilia, no una simple predicción neutral."
    }
  ]
},
{
  "line": "446–447",
  "speaker": "virgilia",
  "en": "Indeed, no, by your patience. I’ll not over the threshold till my lord return from the wars.",
  "es": "De verdad que no, con su permiso. No cruzaré el umbral hasta que mi esposo regrese de la guerra.",
  "notes": [
    {
      "term": "by your patience",
      "type": "Fórmula de cortesía",
      "title": "Con su permiso",
      "body": "Expresión cortés que atenúa una negativa firme; no se refiere literalmente a la paciencia como virtud."
    },
    {
      "term": "till my lord return",
      "type": "Gramática histórica",
      "title": "Subjuntivo sin -s",
      "body": "Return, sin la terminación de tercera persona singular, aparece en una subordinada temporal de sentido futuro."
    }
  ]
},
{
  "line": "448–449",
  "speaker": "valeria",
  "en": "Fie, you confine yourself most unreasonably. Come, you must go visit the good lady that lies in.",
  "es": "¡Vamos, te encierras sin ninguna razón! Debes venir a visitar a la buena señora que acaba de dar a luz.",
  "notes": [
    {
      "term": "Fie",
      "type": "Interjección",
      "title": "Reprobación leve",
      "body": "Fie expresa desaprobación o impaciencia; aquí Valeria reprende amistosamente a Virgilia."
    },
    {
      "term": "lies in",
      "type": "Léxico histórico",
      "title": "Guardar cama tras el parto",
      "body": "Lie in alude al periodo de reposo asociado al parto; la mujer mencionada está de parto o acaba de dar a luz. El contexto no permite precisar más."
    }
  ]
},
{
  "line": "450–451",
  "speaker": "virgilia",
  "en": "I will wish her speedy strength and visit her with my prayers, but I cannot go thither.",
  "es": "Le desearé una pronta recuperación y la acompañaré con mis oraciones, pero no puedo ir allí.",
  "notes": [
    {
      "term": "speedy strength",
      "type": "Léxico",
      "title": "Pronta recuperación",
      "body": "Strength alude aquí a recuperar las fuerzas, en el contexto del parto."
    },
    {
      "term": "thither",
      "type": "Adverbio histórico",
      "title": "Allí",
      "body": "Thither indica movimiento hacia un lugar; hoy suele sustituirse por there."
    }
  ]
},
{
  "line": "452",
  "speaker": "volumnia",
  "en": "Why, I pray you?",
  "es": "¿Y por qué, dime?",
  "notes": [
    {
      "term": "I pray you",
      "type": "Fórmula discursiva",
      "title": "Dime, por favor",
      "body": "I pray you funciona como fórmula de petición, aquí incorporada a una pregunta insistente."
    }
  ]
},
{
  "line": "453",
  "speaker": "virgilia",
  "en": "’Tis not to save labor, nor that I want love.",
  "es": "No es por ahorrarme la molestia ni porque me falte afecto.",
  "notes": [
    {
      "term": "want love",
      "type": "Léxico histórico",
      "title": "Faltar afecto",
      "body": "Want tiene aquí el sentido de «carecer de», no el moderno «desear». Virgilia niega que su negativa sea falta de cariño."
    }
  ]
},
{
  "line": "454–458",
  "speaker": "valeria",
  "en": "You would be another Penelope. Yet they say all the yarn she spun in Ulysses’ absence did but fill Ithaca full of moths. Come, I would your cambric were sensible as your finger, that you might leave pricking it for pity. Come, you shall go with us.",
  "es": "Quieres ser otra Penélope. Pero dicen que todo el hilo que hiló mientras Ulises estaba ausente no sirvió más que para llenar Ítaca de polillas. Vamos, ojalá tu tela de batista sintiera tanto como tus dedos: así dejarías de pincharla por compasión. Ven, tienes que acompañarnos.",
  "notes": [
    {
      "term": "Penelope",
      "type": "Alusión clásica",
      "title": "Penélope",
      "body": "Esposa de Odiseo (Ulises), célebre por esperar su regreso y por su labor textil. Valeria emplea la comparación con ironía."
    },
    {
      "term": "did but",
      "type": "Sintaxis",
      "title": "No hizo sino",
      "body": "Did but equivale a «solo consiguió» o «no hizo más que»; Valeria reduce burlonamente la utilidad de la labor."
    },
    {
      "term": "cambric",
      "type": "Léxico textil",
      "title": "Batista",
      "body": "Cambric es un tejido fino de lino, llamado batista en español."
    },
    {
      "term": "sensible",
      "type": "Léxico histórico",
      "title": "Capaz de sentir",
      "body": "Sensible significa aquí «sensible al dolor» o «capaz de sentir»; Valeria personifica la tela que Virgilia pincha con la aguja."
    },
    {
      "term": "I would",
      "type": "Gramática histórica",
      "title": "Deseo hipotético",
      "body": "I would introduce un deseo equivalente a «ojalá»; were mantiene la modalidad irreal."
    }
  ]
},
{
  "line": "459–460",
  "speaker": "virgilia",
  "en": "No, good madam, pardon me; indeed, I will not forth.",
  "es": "No, señora, discúlpeme; de verdad, no saldré.",
  "notes": [
    {
      "term": "forth",
      "type": "Léxico",
      "title": "Salir de casa",
      "body": "El adverbio forth completa el verbo de movimiento elidido: Virgilia insiste en que no saldrá."
    }
  ]
},
{
  "line": "461–462",
  "speaker": "valeria",
  "en": "In truth, la, go with me, and I’ll tell you excellent news of your husband.",
  "es": "De veras, vamos, acompáñame y te contaré excelentes noticias de tu esposo.",
  "notes": [
    {
      "term": "la",
      "type": "Partícula conversacional",
      "title": "Una interjección familiar",
      "body": "La es una partícula enfática o familiar, frecuente en el diálogo de la época; no es aquí una nota musical."
    }
  ]
},
{
  "line": "463",
  "speaker": "virgilia",
  "en": "O, good madam, there can be none yet.",
  "es": "¡Ay, señora! Todavía no puede haber noticias.",
  "notes": [
    {
      "term": "none yet",
      "type": "Interpretación",
      "title": "La incredulidad de Virgilia",
      "body": "None retoma news: Virgilia considera demasiado pronto que hayan llegado noticias de la campaña; no afirma que su esposo haya muerto."
    }
  ]
},
{
  "line": "464–465",
  "speaker": "valeria",
  "en": "Verily, I do not jest with you. There came news from him last night.",
  "es": "En verdad, no estoy bromeando. Anoche llegaron noticias suyas.",
  "notes": [
    {
      "term": "Verily",
      "type": "Léxico",
      "title": "Afirmación enfática",
      "body": "Verily refuerza la veracidad de lo que sigue: «en verdad», «ciertamente»."
    },
    {
      "term": "jest",
      "type": "Léxico",
      "title": "Bromear",
      "body": "Jest significa hablar en broma. Valeria desmiente que esté tentando a Virgilia con una noticia inventada."
    }
  ]
},
{
  "line": "466",
  "speaker": "virgilia",
  "en": "Indeed, madam!",
  "es": "¿De verdad, señora?",
  "notes": []
},
{
  "line": "467–474",
  "speaker": "valeria",
  "en": "In earnest, it’s true. I heard a senator speak it. Thus it is: the Volsces have an army forth, against whom Cominius the General is gone with one part of our Roman power. Your lord and Titus Lartius are set down before their city Corioles. They nothing doubt prevailing, and to make it brief wars. This is true, on mine honor, and so, I pray, go with us.",
  "es": "Lo digo en serio, es verdad. Oí contárselo a un senador. La situación es esta: los volscos han sacado un ejército al campo, y el general Cominio ha marchado contra ellos con una parte de nuestras fuerzas romanas. Tu esposo y Tito Larcio han tomado posiciones frente a su ciudad de Corioles. No dudan en absoluto de que vencerán y de que la guerra será breve. Te lo aseguro por mi honor; así que, por favor, ven con nosotras.",
  "notes": [
    {
      "term": "In earnest",
      "type": "Léxico",
      "title": "Lo digo en serio",
      "body": "La expresión contrasta con jest en la intervención anterior: Valeria insiste en que no bromea."
    },
    {
      "term": "power",
      "type": "Léxico militar",
      "title": "Fuerzas armadas",
      "body": "Power designa aquí el contingente militar romano, no el poder político abstracto."
    },
    {
      "term": "set down before",
      "type": "Léxico militar",
      "title": "Tomar posiciones ante una ciudad",
      "body": "Set down before expresa la instalación de tropas frente a una plaza para atacarla o sitiarla."
    },
    {
      "term": "They nothing doubt",
      "type": "Sintaxis histórica",
      "title": "Negación adverbial",
      "body": "Nothing funciona como modificador de doubt: «no dudan en absoluto»; no significa que no sospechen nada."
    },
    {
      "term": "to make it brief wars",
      "type": "Sintaxis e interpretación",
      "title": "Una campaña breve",
      "body": "La construcción coordina dos resultados esperados, prevalecer y abreviar la guerra. El plural wars puede aludir a las operaciones bélicas en conjunto."
    },
    {
      "term": "on mine honor",
      "type": "Fórmula de juramento",
      "title": "Por mi honor",
      "body": "Mine es la forma posesiva que aparece ante vocal en usos históricos; la fórmula garantiza la sinceridad de Valeria."
    }
  ]
},
{
  "line": "475–476",
  "speaker": "virgilia",
  "en": "Give me excuse, good madam. I will obey you in everything hereafter.",
  "es": "Discúlpeme, señora. De ahora en adelante la obedeceré en todo.",
  "notes": [
    {
      "term": "Give me excuse",
      "type": "Fórmula de cortesía",
      "title": "Discúlpeme",
      "body": "Virgilia pide que se excuse su negativa actual, aunque promete obediencia en el futuro."
    },
    {
      "term": "hereafter",
      "type": "Léxico",
      "title": "De ahora en adelante",
      "body": "Aquí hereafter se refiere a ocasiones futuras, sin implicar el más allá."
    }
  ]
},
{
  "line": "477–478",
  "speaker": "volumnia",
  "en": "Let her alone, lady. As she is now, she will but disease our better mirth.",
  "es": "Déjala, señora. En su estado actual, solo nos echaría a perder la alegría.",
  "notes": [
    {
      "term": "disease",
      "type": "Léxico histórico",
      "title": "Perturbar o estropear",
      "body": "Disease es aquí un verbo que significa incomodar o perturbar; no se refiere a transmitir una enfermedad."
    },
    {
      "term": "better mirth",
      "type": "Interpretación",
      "title": "La alegría de las otras",
      "body": "Volumnia contrapone el ánimo sombrío de Virgilia a la diversión que esperan disfrutar las demás mujeres."
    }
  ]
},
{
  "line": "479–482",
  "speaker": "valeria",
  "en": "In troth, I think she would.—Fare you well, then.—Come, good sweet lady.—Prithee, Virgilia, turn thy solemness out o’ door, and go along with us.",
  "es": "En verdad, creo que sí nos arruinaría la diversión. Entonces, adiós. Vamos, querida señora. Te lo ruego, Virgilia: deja tu seriedad fuera de casa y ven con nosotras.",
  "notes": [
    {
      "term": "In troth",
      "type": "Léxico",
      "title": "En verdad",
      "body": "Fórmula enfática de sinceridad. Valeria concede que Volumnia tiene razón sobre el efecto del ánimo de Virgilia."
    },
    {
      "term": "Prithee",
      "type": "Gramática histórica",
      "title": "Te lo ruego",
      "body": "Contracción histórica de «I pray thee»; Valeria pasa a una súplica directa y familiar."
    },
    {
      "term": "solemness",
      "type": "Léxico e interpretación",
      "title": "Seriedad sombría",
      "body": "Solemness designa aquí la gravedad o tristeza de Virgilia. «Echarla fuera de casa» prolonga la imagen doméstica de salir al exterior."
    }
  ]
},
{
  "line": "483–484",
  "speaker": "virgilia",
  "en": "No, at a word, madam. Indeed, I must not. I wish you much mirth.",
  "es": "No, señora; mi respuesta es definitiva. De verdad, no puedo ir. Les deseo que se diviertan mucho.",
  "notes": [
    {
      "term": "at a word",
      "type": "Expresión idiomática",
      "title": "Respuesta definitiva",
      "body": "La fórmula refuerza la negativa: Virgilia quiere cerrar la discusión sin dar más explicaciones."
    },
    {
      "term": "must not",
      "type": "Modalidad",
      "title": "No puedo hacerlo",
      "body": "Must not presenta la permanencia en casa como una obligación para Virgilia, no solo como una preferencia."
    },
    {
      "term": "mirth",
      "type": "Léxico",
      "title": "Diversión",
      "body": "Mirth retoma la «alegría» mencionada por Volumnia en 478 y subraya la distancia entre las visitantes y Virgilia."
    }
  ]
},
{
  "line": "485",
  "speaker": "valeria",
  "en": "Well, then, farewell.",
  "es": "Bien, entonces, adiós.",
  "notes": []
}
  ]
},
    {
      "id": "coriolanus-1-4",
      "workId": "coriolanus",
      "act": 1,
      "scene": 4,
      "place": "Ante las murallas de Corioles",
      "sourceRef": "Folger Shakespeare Library · Acto I, escena 4",
      "sectionLabel": "Edición en curso · líneas Folger 486–543",
      "introduction": "Marcio y Tito Larcio aguardan noticias del ejército de Cominio mientras preparan el asalto a Corioles.",
      "stage": "Entran Cayo Marcio y Tito Larcio, con trompeta, tambor, estandartes, capitanes y soldados ante Corioles. Se les une un mensajero.",
      "characters": [
        {
          "id": "martius",
          "name": "Cayo Marcio",
          "english": "Caius Martius",
          "identity": "Comandante romano que participa en el ataque a Corioles.",
          "color": "violet"
        },
        {
          "id": "lartius",
          "name": "Tito Larcio",
          "english": "Titus Lartius",
          "identity": "Comandante romano que acompaña a Marcio.",
          "color": "olive"
        },
        {
          "id": "messenger",
          "name": "Mensajero",
          "english": "Messenger",
          "identity": "Trae noticias de las posiciones del ejército de Cominio.",
          "color": "slate"
        },
        {"id":"senator1","name":"Primer senador volsco","english":"First Senator","identity":"Defensor de Corioles que desafía a Marcio desde las murallas.","color":"ink"}
      ],
      "blocks": [
        {
          "line": "486",
          "speaker": "martius",
          "en": "Yonder comes news. A wager they have met.",
          "es": "Allí vienen noticias. Apuesto a que ya se han enfrentado.",
          "notes": [
            {
              "term": "A wager",
              "type": "Léxico",
              "title": "Una apuesta",
              "body": "La expresión introduce una apuesta informal sobre si los ejércitos han llegado a combatir."
            }
          ]
        },
        {
          "line": "487",
          "speaker": "lartius",
          "en": "My horse to yours, no.",
          "es": "Apuesto mi caballo contra el tuyo a que no.",
          "notes": [
            {
              "term": "My horse to yours",
              "type": "Elipsis",
              "title": "La apuesta",
              "body": "Se sobreentiende el verbo de apostar: Larcio ofrece su caballo frente al de Marcio."
            }
          ]
        },
        {
          "line": "488",
          "speaker": "martius",
          "en": "’Tis done.",
          "es": "Aceptado.",
          "notes": []
        },
        {
          "line": "489",
          "speaker": "lartius",
          "en": "Agreed.",
          "es": "De acuerdo.",
          "notes": []
        },
        {
          "line": "490",
          "speaker": "martius",
          "stageBefore": "A un mensajero.",
          "en": "Say, has our general met the enemy?",
          "es": "Dime, ¿nuestro general se ha encontrado con el enemigo?",
          "notes": [
            {
              "term": "our general",
              "type": "Contexto",
              "title": "Cominio",
              "body": "Se refieren a Cominio, comandante de las fuerzas romanas que operan fuera de Corioles."
            }
          ]
        },
        {
          "line": "491",
          "speaker": "messenger",
          "en": "They lie in view but have not spoke as yet.",
          "es": "Están a la vista unos de otros, pero todavía no han entablado combate.",
          "notes": [
            {
              "term": "have not spoke",
              "type": "Gramática histórica",
              "title": "Participio spoke",
              "body": "Spoke aparece como participio donde el inglés actual estándar prefiere spoken. El contexto militar permite interpretar «no han entablado combate», aunque literalmente se alude a no haberse hablado."
            }
          ]
        },
        {
          "line": "492",
          "speaker": "lartius",
          "en": "So the good horse is mine.",
          "es": "Entonces el buen caballo es mío.",
          "notes": []
        },
        {
          "line": "493",
          "speaker": "martius",
          "en": "I’ll buy him of you.",
          "es": "Te lo compraré.",
          "notes": [
            {
              "term": "buy him of you",
              "type": "Sintaxis histórica",
              "title": "Comprar a alguien",
              "body": "Of you expresa al vendedor, equivalente a from you en el inglés actual."
            }
          ]
        },
        {
          "line": "494–495",
          "speaker": "lartius",
          "en": "No, I’ll nor sell nor give him. Lend you him I will For half a hundred years.—Summon the town.",
          "es": "No: ni te lo venderé ni te lo regalaré. Pero sí te lo prestaré durante cincuenta años. ¡Intimen a la ciudad a rendirse!",
          "notes": [
            {
              "term": "nor sell nor give",
              "type": "Sintaxis",
              "title": "Coordinación negativa",
              "body": "La doble coordinación negativa refuerza la negativa de Larcio a desprenderse del caballo."
            },
            {
              "term": "half a hundred years",
              "type": "Léxico",
              "title": "Cincuenta años",
              "body": "La exagerada duración del préstamo convierte la apuesta en una broma amistosa."
            },
            {
              "term": "Summon the town",
              "type": "Léxico militar",
              "title": "Requerir la rendición",
              "body": "Summon se usa para exigir formalmente que una ciudad sitiada se rinda; no significa simplemente llamar a sus habitantes."
            }
          ]
        },
        {
          "line": "496",
          "speaker": "martius",
          "en": "How far off lie these armies?",
          "es": "¿A qué distancia están esos ejércitos?",
          "notes": []
        },
        {
          "line": "497",
          "speaker": "messenger",
          "en": "Within this mile and half.",
          "es": "A menos de una milla y media.",
          "notes": [
            {
              "term": "this mile and half",
              "type": "Medidas",
              "title": "Distancia aproximada",
              "body": "La frase elide la segunda aparición de mile: una milla y media, sin necesidad de convertir la medida en el diálogo."
            }
          ]
        },
        {
          "line": "498–502",
          "speaker": "martius",
          "en": "Then shall we hear their ’larum and they ours. Now, Mars, I prithee, make us quick in work, That we with smoking swords may march from hence To help our fielded friends!—Come, blow thy blast.",
          "es": "Entonces oiremos su alarma de combate y ellos la nuestra. Ahora, Marte, te lo ruego, haz que actuemos con rapidez, para que podamos marchar de aquí con las espadas todavía humeantes y socorrer a nuestros compañeros que luchan en el campo. ¡Vamos, toca la trompeta!",
          "notes": [
            {
              "term": "’larum",
              "type": "Léxico militar",
              "title": "Alarma de combate",
              "body": "Forma abreviada de alarum, señal sonora de combate o alarma militar."
            },
            {
              "term": "Mars",
              "type": "Mitología",
              "title": "Marte",
              "body": "Invocación al dios romano de la guerra; no se trata de una referencia al propio Marcio."
            },
            {
              "term": "smoking swords",
              "type": "Imagen retórica",
              "title": "Espadas humeantes",
              "body": "Imagen hiperbólica de armas todavía calientes por la violencia del combate."
            },
            {
              "term": "fielded friends",
              "type": "Léxico militar",
              "title": "Compañeros desplegados",
              "body": "Fielded sitúa a los aliados en el campo de batalla, en contraste con las fuerzas ante la ciudad."
            },
            {
              "term": "blow thy blast",
              "type": "Léxico",
              "title": "Toque de trompeta",
              "body": "Blast designa aquí el sonido emitido por un instrumento de viento militar."
            }
          ]
        },
        {"line":"503","speaker":"martius","stageBefore":"Suena una señal de parlamento. Entran dos senadores y otros volscos sobre las murallas de Corioles.","en":"Tullus Aufidius, is he within your walls?","es":"¿Está Tulo Aufidio dentro de sus murallas?","notes":[{"term":"within your walls","type":"Léxico","title":"Dentro de la ciudad","body":"La referencia a las murallas identifica a Corioles como plaza fortificada; Marcio pregunta por la presencia de su rival."}]},
        {"line":"504–514","speaker":"senator1","en":"No, nor a man that fears you less than he: That’s lesser than a little. Hark, our drums Are bringing forth our youth. We’ll break our walls Rather than they shall pound us up. Our gates, Which yet seem shut, we have but pinned with rushes. They’ll open of themselves. Hark you, far off! There is Aufidius. List what work he makes Amongst your cloven army.","es":"No, ni hay aquí hombre alguno que les tema menos que él; y eso es menos que casi nada. ¡Escuchen! Nuestros tambores llaman a los jóvenes a salir. Antes derribaríamos nuestras propias murallas que dejarnos encerrar por ustedes. Nuestras puertas, aunque parezcan cerradas, están sujetas apenas con juncos: se abrirán solas. ¡Escuchen allá a lo lejos! Allí está Aufidio. Oigan el estrago que causa entre su ejército dividido.","stageBefore":"Un tambor suena a lo lejos durante el parlamento; más tarde se oye otra alarma distante.","notes":[{"term":"lesser than a little","type":"Retórica","title":"Menos que casi nada","body":"La réplica intensifica mediante una comparación paradójica el desprecio que los defensores dicen sentir por los romanos."},{"term":"pound us up","type":"Léxico histórico","title":"Encerrarnos","body":"Pound funciona como verbo de encerrar o confinar, como se hace con animales en un cercado; no significa aquí golpear."},{"term":"pinned with rushes","type":"Imagen","title":"Apenas sujetas con juncos","body":"Los juncos son cierres proverbialmente débiles: el senador afirma que las puertas pueden abrirse fácilmente para una salida ofensiva."},{"term":"List","type":"Gramática histórica","title":"Escuchen","body":"Imperativo de list, forma abreviada o variante de listen."},{"term":"cloven army","type":"Interpretación","title":"Ejército dividido","body":"Cloven significa partido o hendido; el senador presenta como hecho la ruptura de las filas romanas, en tono provocador."}]},
        {"line":"515","speaker":"martius","stageBefore":"Los senadores se retiran de las murallas.","en":"O, they are at it!","es":"¡Ah, ya están combatiendo!","notes":[{"term":"at it","type":"Expresión idiomática","title":"En plena acción","body":"La expresión remite aquí al combate que se oye fuera de escena."}]},
        {"line":"516","speaker":"lartius","en":"Their noise be our instruction.—Ladders, ho!","es":"Que el estruendo nos sirva de señal. ¡Escalas, aquí!","notes":[{"term":"Their noise be our instruction","type":"Sintaxis","title":"Que el ruido nos guíe","body":"Be tiene valor exhortativo: Larcio propone tomar el ruido del combate como señal para actuar."},{"term":"Ladders","type":"Léxico militar","title":"Escalas de asalto","body":"Son escalas para franquear una muralla, no escaleras domésticas."}]},
        {"line":"517–525","speaker":"martius","stageBefore":"Sale el ejército volsco por las puertas de la ciudad.","en":"They fear us not but issue forth their city.— Now put your shields before your hearts, and fight With hearts more proof than shields.—Advance, brave Titus. They do disdain us much beyond our thoughts, Which makes me sweat with wrath.—Come on, my fellows! He that retires, I’ll take him for a Volsce, And he shall feel mine edge.","es":"No nos temen: salen de su ciudad a enfrentarnos. ¡Pongan ahora los escudos delante del pecho y combatan con corazones más resistentes que los escudos! ¡Adelante, valiente Tito! Nos desprecian mucho más de lo que imaginábamos, y eso me hace sudar de rabia. ¡Vamos, compañeros! Al que retroceda lo consideraré un volsco, y sentirá el filo de mi espada.","notes":[{"term":"issue forth","type":"Léxico","title":"Salir en formación","body":"Issue forth significa salir al exterior; aquí designa una salida militar desde las puertas de la ciudad."},{"term":"more proof than shields","type":"Retórica","title":"Más resistentes que los escudos","body":"Proof expresa resistencia a un ataque. La exhortación contrapone la firmeza interior al equipo defensivo."},{"term":"disdain","type":"Léxico","title":"Despreciar","body":"El desprecio que Marcio atribuye a los volscos provoca su ira, antes incluso del choque."},{"term":"He that retires","type":"Sintaxis","title":"Quien retroceda","body":"He that es una construcción relativa generalizadora; retires significa aquí retirarse del combate."},{"term":"mine edge","type":"Metonimia","title":"El filo de mi espada","body":"Edge designa por metonimia el arma cortante con la que amenaza a sus propios soldados."}]},
        {"line":"526–539","speaker":"martius","stageBefore":"Alarma de combate. Los romanos retroceden hasta sus trincheras, perseguidos por los volscos. Sale Marcio maldiciendo, acompañado de soldados romanos.","en":"All the contagion of the south light on you, You shames of Rome! You herd of—Boils and plagues Plaster you o’er, that you may be abhorred Farther than seen, and one infect another Against the wind a mile! You souls of geese, That bear the shapes of men, how have you run From slaves that apes would beat! Pluto and hell! All hurt behind. Backs red, and faces pale With flight and agued fear! Mend, and charge home, Or, by the fires of heaven, I’ll leave the foe And make my wars on you. Look to ’t. Come on! If you’ll stand fast, we’ll beat them to their wives, As they us to our trenches. Follow ’s!","es":"¡Que caigan sobre ustedes todos los contagios del viento del sur, vergüenzas de Roma! ¡Rebaño de...! ¡Que los forúnculos y las pestes los cubran por entero, para que resulten repugnantes aun antes de ser vistos y se contagien unos a otros a una milla de distancia, incluso contra el viento! ¡Almas de ganso con figura humana! ¿Cómo han podido huir de unos esclavos a quienes hasta los monos vencerían? ¡Por Plutón y el infierno! Todos heridos por la espalda: la espalda roja y el rostro pálido de tanto huir, temblando de miedo como con fiebre. ¡Corríjanse y ataquen con todas sus fuerzas, o, por los fuegos del cielo, abandonaré al enemigo y les haré la guerra a ustedes! ¡Ténganlo presente! ¡Adelante! Si mantienen sus posiciones, los haremos retroceder hasta sus mujeres, como ellos nos han hecho retroceder hasta nuestras trincheras. ¡Síganme!","notes":[{"term":"contagion of the south","type":"Contexto léxico","title":"Viento pestilente","body":"El viento del sur se asocia aquí con aires insalubres; la maldición imagina una epidemia que cae sobre los soldados."},{"term":"You herd of—","type":"Retórica","title":"Insulto interrumpido","body":"La construcción queda suspendida antes de que Marcio encuentre un sustantivo para completar la injuria; el giro pasa directamente a otra maldición."},{"term":"Plaster you o’er","type":"Léxico","title":"Cubrir por entero","body":"Plaster funciona como verbo: cubrir o embadurnar; aquí la imagen es una costra de llagas y enfermedades."},{"term":"Against the wind","type":"Hipérbole","title":"Contagio contra el viento","body":"La infección imaginada se propaga incluso en dirección contraria al viento, exageración que intensifica la repulsión."},{"term":"souls of geese","type":"Imagen animal","title":"Almas de ganso","body":"La cobardía se atribuye a un interior animal encerrado en un cuerpo humano; la oposición se explicita en el verso siguiente."},{"term":"All hurt behind","type":"Elipsis","title":"Heridas en la espalda","body":"La frase omite un verbo expreso: la posición de las heridas acusa a los soldados de haber dado la espalda al enemigo."},{"term":"agued fear","type":"Léxico histórico","title":"Miedo febril","body":"Ague designa una fiebre acompañada de escalofríos; fear recibe esa cualidad corporal en la imagen."},{"term":"charge home","type":"Léxico militar","title":"Atacar a fondo","body":"Home refuerza el alcance o la contundencia de la acometida, no indica un regreso al hogar."},{"term":"Follow ’s","type":"Gramática","title":"Síganme","body":"’s representa us en la exhortación «Follow us»; el hablante encabeza la carga y llama a los demás a seguirlo."}]},
        {"line":"540–543","speaker":"martius","stageBefore":"Otra alarma. Los volscos vuelven a entrar y son rechazados hacia las puertas de Corioles, que se abren para recibirlos.","en":"So, now the gates are ope. Now prove good seconds! ’Tis for the followers fortune widens them, Not for the fliers. Mark me, and do the like.","es":"Bien, ahora las puertas están abiertas. ¡Demuestren que son buenos compañeros de armas! La fortuna las abre de par en par para quienes persiguen, no para quienes huyen. ¡Fíjense en mí y hagan lo mismo!","notes":[{"term":"ope","type":"Gramática histórica","title":"Abiertas","body":"Ope es una forma poética abreviada de open, usada aquí como adjetivo predicativo."},{"term":"good seconds","type":"Léxico","title":"Buenos apoyos en combate","body":"Second designa a quien respalda a otro en una pelea; Marcio exige que los soldados lo secunden."},{"term":"fortune widens them","type":"Personificación","title":"La fortuna abre las puertas","body":"Fortune aparece como agente que ensancha las puertas para los perseguidores; es una interpretación figurada de la oportunidad militar."},{"term":"followers","type":"Contraste retórico","title":"Perseguidores y fugitivos","body":"Followers y fliers forman una antítesis: en esta situación, seguir significa perseguir al enemigo en retirada."}]}
      ]
    }
  ]
};