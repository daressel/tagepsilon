const imagesConstructor = (altName, picNames = []) => {
  return picNames.map((name) => `images/services/${altName}/${name}`);
};

export default [
  {
    title: 'Металлические мостовые конструкции.',
    images: imagesConstructor('metal_bridge_structures', ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']),
    description:
      'Все детали производятся на нашем собственном оборудовании, мы изготавливаем мостовые конструкции на современном и высокоточном оборудовании. Металлоконструкции мостов проектируют опытные специалисты с использованием новейших версий зарубежных и отечественных САПР. Благодаря опыту и профессиональному подходу к делу мы имеем возможность изготавливать стальные конструкции для железнодорожных, совмещенных, городских и автомобильных мостов.',
    altName: 'metal_bridge_structures',
  },
  {
    title: 'Подкрановые пути, балки сварные двутавровые.',
    images: imagesConstructor('crane_runways', ['pic1.jpg', 'pic2.jpg']),
    description:
      'В классическом варианте подкрановые конструкции состоят из колонн, подкрановых балок и верхнего строения пути - рельсов и элементов крепления. Колонны могут быть одно или двухветвевыми, состоящими из двух вертикальных стержней связанных дополнительными элементами. Двухветвевые колонны обеспечивают большую жесткость (устойчивость) в поперечном направлении при равной металлоёмкости, но более трудоёмки в изготовлении, что сводит на нет выигрыш в металлопрокате. Главным образом в настоящее время применяются одноветвевые колонны из двутавровой балки. Для увеличения жесткости в поперечном направлении применяется двутавр с большей высотой сечения, при этом ширина сечения может оставаться небольшой (балка с индексом Б), поскольку продольная жесткость конструкции задается при помощи ветровых связей. В идеале оголовки колонн связываются пространственной фермой в жесткую раму, подкрановые балки размещаются на консолях.',
    altName: 'crane_runways',
  },
  {
    title: 'Оборудование из нержавеющей стали (сепараторы, миксеры).',
    images: imagesConstructor('separators_miksers', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Мы производим промышленные сепараторы под любые задачи и требования заказчика. У нас можно заказать сепараторы из нержавейки, а также высокоустойчивой стали других марок. Наши специалисты помогут подобрать наиболее подходящую модель под задачи вашего предприятия. Вы также  можете заказать миксеры с необходимыми характеристиками по рекомендациям наших сотрудников.',
    altName: 'separators_miksers',
  },
  {
    title: 'Обечайки и конусы.',
    images: imagesConstructor('shells_cones', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Компания обладает большим опытом по изготовлению обечаек и конусов. Предлагаем услуги по вальцеванию деталей. Диаметры конусов и обечаек возможны любого диаметра. Имеются оснастки для качественного изготовления. После работы проводится процедура калибровки изделий. Конуса завальцовываем на специализированном оборудовании.',
    altName: 'shells_cones',
  },
  {
    title: 'Резервуары различного назначения. Цистерны.',
    images: imagesConstructor('cisterns', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Эти резервуары используют для хранения технических жидкостей. Они также изготавливаются из стали и имеют цилиндрическую форму. Размещение их под землей обусловлено целями безопасности. Такие резервуары проходят дополнительную защиту откоррозии корпуса. Для этого используют  покрытие гидроизолярующими материалами на основе битума. Также расположение резервуаров и емкостей ниже уровня промерзания грунта обеспечивает дополнительную термоизоляцию. а главное предотвращает емкости от повреждения, что обеспечивает пожаробезопасность.',
    altName: 'cisterns',
  },
  {
    title: 'Водонапорные башни Рожновского от 15 м3 до 160 м3.',
    images: imagesConstructor('water_towers', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Водонапорная башня, названная в честь советского инженера Рожновского, представляет собой гидротехническое сооружение, благодаря которому создается запасной объем воды в период наименьшего ее потребления и транспортировка по сетям водоснабжения под необходимым давлением, когда водопотребление увеличивается.',
    altName: 'water_towers',
  },
  {
    title: 'Бункеры - накопители  для мусора и контейнеры для ТБО.',
    images: imagesConstructor('bunkers', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Передняя и задняя наклонная стенки бункера-накопителя изготовлены из цельного листа. Боковые стенки снабжены захватами для погрузки бункера-накопителя на мусоровоз и разгрузки. Спереди бункер-накопитель имеет опоры для фиксации его на мусоровозах при транспортировке. Сзади бункер-накопитель оснащен захватами, используемыми при разгрузке. Захваты выполнены из круга Ст3 диаметром 30 мм. Корпус бункера-накопителя, стыки силовых элементов и захваты сварены дуговой сваркой сплошным швом в углы.',
    altName: 'bunkers',
  },
  {
    title: 'Строительные металлоконструкции.',
    images: imagesConstructor('metal_structures', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Мы предлагаем строительным компаниям приобрести качественные металлоконструкции по выгодной цене производителя. Изготовление изделий осуществляется в Санкт-Петербурге на современном высокоэффективном оборудовании. В производстве применяются инновационные технологии, на каждом этапе осуществляется строгий контроль качества продукции, проверяется соответствие техническим регламентам и стандартам.',
    altName: 'metal_structures',
  },
  {
    title: 'Опоры ЛЭП, мачты, вышки (металлические).',
    images: imagesConstructor('power_transmission_towers', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Наша компания проектирует и изготавливает металлические опоры ЛЭП, а также вышки из оцинкованной стали. Они используются в тех случаях, когда железобетонные конструкции нельзя установить в силу больших габаритов или недостаточной надежности.',
    altName: 'power_transmission_towers',
  },
  {
    title: 'Сита для строительной и пищевой промышленности.',
    images: imagesConstructor('sieves', ['pic1.jpg']),
    description:
      'Сита применяются в испытательных лабораториях Центров оценки качества зерна, хлебоприемных и зерноперерабатывающих предприятий, на хлебозаводах, в кондитерский, пищевой и комбикормовой промышленности, в сельском хозяйстве, фармакологии, горной, химической и других отраслях промышленности для контроля различных материалов по размеру частиц до и после дробления, измельчения и обогащения. На наших ситах контролируют: зерно, муку, крупы, чай, лекарственные травы, семена, орехи, минеральные удобрения, почвы, пески, драгоценные камни, абразивные порошки, строительные материалы. Алюминиевые сита также предназначены для промывки мазута.',
    altName: 'sieves',
  },
  {
    title: 'Горизонтальные и вертикальные стальные емкости.',
    images: imagesConstructor('steel_tanks', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Горизонтальные резервуары Для изготовления резервуаров применяются современные металлорежущие станки и оборудование. Результат — качественная продукция и кратчайшие сроки выполнения заказа. Резервуары проходят дополнительное покрытие защитной краской — это обеспечивает их более длительную эксплуатацию и защищает от воздействия неблагоприятных факторов. Вертикальные резервуары — предназначенные для приема, хранения и выдачи большого объема жидкостей. При изготовлении в основном применяются такие материалы как углеродистая и нержавеющая сталь, а также различные сплавы.',
    altName: 'steel_tanks',
  },
  {
    title: 'Силосы для цемента.',
    images: imagesConstructor('silos_for_cement', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Силосы для цемента — это основа надёжного и удобного способа хранения цемента, извести, песка, строительной смеси и ряда других сыпучих материалов. Это связано прежде всего с тем, что стальной силос, как и железо-бетонный силос — это закрытая цилиндрическая емкость вертикального типа, которая защищает содержимое от воздействия окружающей среды, а для хранения цемента и извести воздействие влаги приводит к их непригодности для дальнейшего использования. Кроме этого, конструкция силоса позволяет оперативно производить выгрузку и загрузку материалов.',
    altName: 'silos_for_cement',
  },
  {
    title: 'Дымовые металлические трубы.',
    images: imagesConstructor('smoke_metal_pipes', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Изготовление дымоходов для котельных осуществляется преимущественно из нержавеющей стали. Это связано с тем, что труба в процессе эксплуатации подвергается сильным химическим и температурным воздействиям. Нержавеющая сталь отличается высокой коррозийной устойчивостью, демонстрирует высокую прочность, надежность и долгий срок службы.',
    altName: 'smoke_metal_pipes',
  },
  {
    title:
      'Услуги по порезке, вальцовке, гибке, пескоструйной и антикор-розийной обработке металла.',
    images: imagesConstructor('metal_processing_services', ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']),
    description:
      'Наши специалисты занимаются изготовлением металлоконструкций и оказанием разнообразных услуг металлообработки. В их распоряжении – современное металлообрабатывающее оборудование, которое позволяет выполнять заказы оперативно и качественно.',
    altName: 'metal_processing_services',
  },
  {
    title: 'Капитальный ремон.',
    images: imagesConstructor('overhaul', ['pic1.jpg', 'pic2.jpg']),
    description:
      '1) Правка и ремонт элементов металлоконструкций в холодном состоянии либо с подогревом. Местные резкие искривления рекомендуется исправлять исключительно в горячем состоянии. Поверхность после правки не должна иметь каких-либо вмятин, трещин и прочих повреждений. 2) Ремонт металлоконструкций при помощи сварки. При ремонте металлоконструкций с применением сварки проходит обязательная проверка полученных соединений. Основной металл под сварку должен быть очищен от ржавчины и различных загрязнений, а также важно исключить принудительную пригонку деталей при ремонте сварных соединений металлоконструкций, так как это чревато ухудшением несущей способности сооружения. 3)Удаление дефектных элементов и установка на их место новых.',
    altName: 'overhaul',
  },
  {
    title: 'Детские площадки.',
    images: imagesConstructor('playgrounds', ['pic1.jpg', 'pic2.jpg']),
    description:
      'Производим уличное игровое, парковое и спортивное оборудование. Предоставляем гарантию на всю продукцию. Вся продукция производится согласно ГОСТ Р.',
    altName: 'playgrounds',
  },
];
