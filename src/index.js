import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from "./context";

ReactDOM.render(
    <UserProvider>
    <App />
    </UserProvider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
//Component Mantığı
    parçala beni
    a a a ->3 tane a yazmak yerine bir kere a yaz parametrelerin valuelarını değiştir
    componentlarımız state ve propsları var
    bir component başka bir componenta props geçirebilir
    virtual dom->sadece değişen component render ediliyor

//Virtual Dom
    real domun copyası
    document objeleri key-value olarak tutulur
    snapshot alır. //güncellenen,güncellenmeyen
    diff algoritması ile güncellenen objeler anlaşılıyor
    belirlenen objeler real doma aktarılıyor
    değişen yer render ediliyor böylece
    sadece state değiştiğinde render edilir//değişen obje
    betch update


****React JSX ve Component

//React Dosyaları
    expression kur //live server,react-redux...
    package.json//bağımlılıklar
    react-scripts//npm packageı npm run start//react scripts
    build //productiona çıkarırsak tek bir bundle dosyası haline getiriyor-webpack aracılığıyla

    react-dom //virtual dom meselesi felan
    index.html
        componentler bunun içine eklenir
    index.js
        create-react-app //default component
        render-app-root //app componentini roota render et
        serviceWorker //progressive web uygulamaları yapmamızı sağlar
    app.js
        jsx//js içinde html yazmamızı sağlayan format
    
    react dev tools //component içi state,props görme

//react ve jsx
    jsx javascript extenşını js içinde html yazmamızı sağlıyor
    her şey ana divin içinde sadece bir parent eleman dönebiliyor
    class->className
    label htmlFor

//jsx ifadeleri
    {1+1}//js yazmak için return içine jsx ifadeleri içinde
    {"murat".toUpperCase()}
    isAuth  ? ___:____

//İlk Componenti Oluşturma
    components
        User
            rcc
                input
                button gönder
        App
            <User/>

//React, CSS ve Bootstrap
    h4 style= {{color:"blue"}}
    import './App.css'
    boostrap.index.html->css,js dahil et
        css head
        js body alt

//Functional Components
    sabit,değişmiyecek veriler->footer gibi->functional component
    değişen değerler->class component
    Navbar.js
        functional component->return //rfc
        //arrow function ilede yazılır
    App.js
        Navbar

***Props
//Props Kullanımı
    bir componentden başka componente değişmeyen veri gönderme
    User.js
        ul-li ad,soyad,maas,departman
        //(props)->functional props.ad
            <li>{this.props.ad} //class
    App.js
        User ad = "emre" 
        User
        User 
    //destructing
    const {salary,name} = this.props

//Default Props ve PropTypes
    Navbar
        import prop-types
        Navbar.propTypes {
            title : PropTypes.string.isRequired
        }
    //default props
        Navbar.defaultProps = {
            title : "Default App"
        }
    User
        import
        .propTypes
    2.yol
        static.defaultProps = {}

//User Arayüzü ve Font Awesome
        font awesome kurulum
        ıcons
            delete <i class
        User.js
            li <i
            güzelleştir card gibi yap
            card-header
            card-body

****state
//state
        bir componentın o anki durumu
        componentın üzerine tıklanmışmı
        delete butonuna tıklanmışmı gibi
        herşey statelerde tutulabilir.
        state değiştiği anda virtual dom
        onu görüyor ve statei değişen component
        sadece değişir
        setstate ile state değiştirilir.
        componentlar arası state geçilir
//state oluşturma
        User.js
        constructor(props) 
            super(props)
            this.state={test:"test"}
            
        {this.state.test}//kullanma
        //isVisible ? : null //false true 

//react eventler
        name bastığım zaman bi fonksiyon çalışcak
        onClick = {this.onClickEvent}
        onClickEvent(e) //e->event objesi
        {console.log(e.target)}//h4
            this//User objesini göstermez js ve reactda undefined
            //bu this hiç bir yeri göstermiyor
            //rendera miras aldığımız için thisler User objesini gösterir
            //kendi yazdığımız methodlarda ise nereyi gösterdiği belli değildir
            onClickEvent.bind(this) //this Userı gösteriyor
            //ben diyomki onclickeventi içinde thisi kullanırsak bu this user objesini göstercek
            //constructor,bind,arrow function

        onClickEvent.bind(this,34)//fonksiyon parametreleri
        onClickEvent(number,e)

//Eventler ve State Değiştirme
        //onCLickEvent
        setState 
            isVisible

//Componentler Arası İletişim
        App.js
            state
                users:
                {_:"_"},{}}//obje
        <Users users={this.state.users}/>
        app(parent)->child
        users(ara component)->user(child component)
        users//state göndercez burdan map yapıp userda döndürcez
        Users.js rcc
            import user
            const {users} = this.props//arrayi aldık
            map//her bir user componentini render etcez
                return ( <User name={user.name}/>)
                //key problemini çöz //virtual dom (key,value) ->hangi componenti güncelliycem

//Kullanıcı Silme ve Componentlar Arası State İletişimi ( Props Drilling )
        çöp kutusuna basınca cartı sil
        app.js-props->users.js-props->user.js
        app.js deleteUser(id) {setState({//bind et
            this.state.users.filter(id eşitse filtreleme)
        })}
        <Users deleteUser={this..}
        Users.js
            propTypes
            id gönder
        User.js
            onDeleteUser//butona basınca 
                id al
                deleteUser(id)

****Context-api
//state yönetimi
    data->context->components(context api)
    data->components(prop drilling)
    her yerde kullanılabiilecek stateler
    Users,Posts felan
    store içinde state tutcaz(redux)
    provider componenti(context-api)->tüm stateler
    consumer(data veya state kullanabiliyoruz)
    context-api,redux->orta ölçekli context, redux büyük projeler
//provider ve consumer oluşturma
    context.js//provider,consumer
        provider//sağlayıcı->uygulamamızı sarmalamak için
        consumer//tüketici,provider tarafından bize gönderilen verileri kullanmamızı sağlar
        const UserContext = createContext
        provider oluştur rcc//default kaldır
        UserProvider//tüm uygulama sarmallıycak
            //buraya stateimizi göndermemiz lazım
                state = {}
            UserContext.Provider //statei value olarak geçir
              this.props.children//app.js->userproviderın çocuklarını bascak
            userConsumer //verileri kullanmak için diğer componentlerde
    //şimdi app componentini sarmalladığımız için value olarak gönderdiğimiz
    statei her yerde kullanabiliriz(userConsumer ile value kullancaz)

//provider ve consumer oluşturma -2
        app.js den statei sil deleteUserıda sil
        Usersa state göndermiycez appdan
        Usersdada stateleri ve propTypesları sil
        deleteUserı usera göndermiycez sil
        Userdan deleteUserı sil consumerdan gönderceğimiz dispatch gelicek
        deleteUserıda sil propTypes
        context-apia göre güncelle
            app->users->user-user-user(provider ile sarmalla,consumer ile value gönder)
            index.jsde UserProvider>App (uygulamayı sarmalladık)
        User.js
            import UserConsumer
            //userConsumerı dönmeliyiz kullanmak için
            //returnu yoruma al-tüm kodlar valuenun içinde döncek
            //return (<UserConsumer>{value=>const {user}=value return <div>>})

//Action, Reducer ve Dispatch Kavramları
        action->hangi işlemin gerçekleşeceğini ve hangi veriler gönderileceğini
            belirten js objesidir. 2 türlü property barındırır
                type:hangi işlemin gerçekleşeceğini(adduser)
                payload:hangi verinin gönderileceği
                (context-api içinde hangi verilerin güncelleneceği,gönderileceği)
        dispatch->actionları context'e göndermekle görevli bir js fonksiyonudur
            provider stateinin içinde bulunur.
        reducer-> gelen action'ın tipine göre state'i değiştirecek işlemlerden
            sorumlu bir js fonksiyonudur.
        nasıl çalışır?
            context root->child...
            child silme butonu tıklandı 
            action(type:delete,payload:id)
            //bu actionı context içindeki providera yollamak için
            dispatch yardımıyla bu actionımızı contextapiya gönderiyoruz
            context api içinde bulunan reducerda bu actionı alıyor 
            ve bu actionın tipine göre ve payloada göre bizim stateimizi değiştiriyor

//Action, Reducer ve Dispatch Kullanımı-bu videoyu yeniden izle
        dispatch state içinde yaz actionları göndercez
            //alt componentlardan bize action gelcek ve biz bunu reducera
            göndercez reducerdan bize güncellenmiş state gelcek ve bizde set
            state ile güncelliycez. 
                reducer(state,action)//güncellenmemiş state göndercez güncellenmiş state
                gelcek ve statei güncelliycez
            -reducer yaz//actiona göre işlemi yap
                switch(action.type)
                    case delete
                        ...state//eski stateactionın propertylerini spret operatörüyle parçaladık
                        //yeni statei göndercez
                default eski state dön

            dispatche bir action gönder
            User.js
                UserConsumer
                //hepsini içine at-value içindeki dispatchi al
                delete iconun a tıklayınca
                    onDeleteUser .bind(this,dispatch//dispatch göndercez
                        onDeleteUser(dispatch,e)
                            //id al
                            dispatch kullan
                                action type,payload
                                
//Kullanıcı Ekleme Formu
        components
            AddUser rcc
             
//React - Pose Animation
        AddUser
        buton koycaz buton formu saklayıp açcak
        react pose kur
        Box //component
                        visible
                        hidden
        retur Box pose={this.state.isVisible ? __ : __}
        state = {visible:true}
        button changeViisibility
        changeVisibility visible!
        //cardı animation içine al
        //element yok olmuyor yok olması için display:none
            applyAtStart : {display:block}
            appplyAtEnd: "none" 

            
//Dinamik CSS ve React
        bastığımız kutunun backgroundını değiştirme
        visible:true,false //User.js
                        isVisible = ? __ : __

//React - Controlled Components ve onChange Handler
        //formları adduser stateine bağlama
        addUser //name statei statelerinde güncellenmesini istiyoruz
        addUser.js
                state visible,name,department,salary
                const name,..
                name inputuna value olarak name ver diğerlerinede
                forma herhangi bir şey yazamıyoruz
                //eğer değiştirmek istiyorsak onChange yazmalıyız
                //controllü component(input,button) bunların içindede bir state var değiştirmek
                için onchange eventinde olması gerekiyor içindeki değerleri değiştirebilmek için
            e.target.value ile state değiştiricez changeName,changeDepartment...
            //name özelliğiyle karşıdan gelen değeri alıcaz ve onun içindeki değerde name olduğu için
            changeInput//tek bir fonksiyona indirgiyoruz
            name=value->name salary,name,department

//Kullanıcı Ekleme ve Context Api
    AddUser.js
        formumuzdaki bilgileri listeye ekliycez
        form onSubmit addUser=dispatch gönder
    addUser dispatch al
        name,.... =stateden al
        newUSer id:uniqid() name:name..//yeni obje
        //uniique id->reactjss generate unique id uniqid
        dispatch(action oluştur)
        //contextde idleri string yap çünkü uniqid string dönüyor proptypesdada öyle yap

        <UserConsumer> value return

        context.js 
            reducer
             add_user
                    eski state dön
                    push //push array dönmüyor arrayın yeni uzunluğunu dönüyor
                    önceki usersın bilgilerini alıp yanına yeni userı eklemem lazım

***LifeCycle
//  
    mounting//sayfaya yerleştirmek    
        componentler aslında class
        constructor//props geçirilir state tanımlanır bind edilir
        render //jsx formatında componant
        componentDidMount
    updating
        state değişiyorsa ve alttaki componentın statelerinide etkiliyorsa
        setstate
        forceupdate ile değişir
        render
        dom updates
        componentdidupdate
    unmounting//sayfadan kaldırma
        componentWillUnmount
    shouldcomponentupdate
        
//react mounting//componentin ilk yerleşme aşaması
    app.js 
        <Test test="deneme"
    test.js rcc
        constructor(props) super(props->yazmazsak undefined) this.props
        render//mount edilirken çalışıyor-jsx formatı return edilirken kullanılmalı state set edilmemeli
        //setstate edilicek render edilicek setstate edilicek sonsuza kadar böyle devam edicek renderda setstate kullanırsak
        componentDidMount()//mount edildikten sonra-cdm
                        //api işlemlerini kullanırken kullan
                        //api veri aldık setstate ile güncelliycez->sonra render edilir
        //update işlemi olduğu için aslında componentDidUpdate de çalışıyor
//Updating
    //child componentde props ya da state değiştiğinde ya da forceupdate
    render->güncell>componentDidUpdate
    //dom üzerinde manipülasyon yapmak istiyorsak cdu
    prevProps,prevState->props değişmeden önceki props ya da state gelir.
    //shouldComponentUpdate
            güncellemeden sonra renderdan önce
            scu true dönerse render edilir false olursa render olmaz
            o componentin yeniden güncellenmesine ihtiyaç yoksa kullanılır
            puer component->scu kendince yazmış

//Unmounting
    componentimiz arayüzden kaldırılıyorsa kaldırılmadan hemen önce
    componentWillUnmount çalışıyor
    belli abonelikleri iptal etmek
    kaynakları serbest bırakmak için kullanılır

*****React , Rest Api ve Http Requests

//Jsonplaceholder ve Postman
    fakerestapi

//Json Server Kurulumu
    npm install json-server
    api-db.json
    json-server --watch api/db.json --port 3004

//Axios ve React - Get Request
    context.
    npm install axios
    import axios
    context.js 
     componentDidMount async
         const res=   await axios.get//listeyi getir

//Delete Request
    reducer içindede yapabiliriz ancak reducerın görevi state değiştirmek için kullanılmalı
    User.js
     onDeleteUser

//Post Request
    addUser //restapiye user ekleme
     uniqide ihtiyaç yok rest-api kendinden ekliycek
     addUser
      newUser
      axios.post
      dispatch //response.data//id eklenmiş halini göndercez
      
****Router

//React Router - Router ve Route Kullanımı
        BrowserRouter,Router,Route
                        
        Router
           Route exact / component={Home}
           Route exact /about render = () => {}


//React Router - Link ve Switch Kullanımı
        Switch
         /
         /add
         /jsajdsajk ->olmayan bir url NotFount rfc
         Navbar
        Link
         <li><Link to ="/">Home</Link>
//Refactoring ve Klasörleme
        pages NotFound
              Contribute
        layout//sabit componentler
              functional componentler
              Navbar.js

***son adımlar
//navbar özelleştir
        

//kullanıcı güncelleme formu ve params
        app.js
            <UpdateUser /:id />
        forms
            UpdateUser.js rcc 
                this.props.match.params.id
                AddUser copy paste
                        animation sil
                        updateUser
            User.js
                <Link edit/${id}>Update User

// Kullanıcı Bilgilerinin Forma Yazılması
    UpdateUser
    update butonuna tıklanınca gelen id bilgisine göre update formuna bilgileri kaydtme
    cdm this.props.match.params
        res = axios.get(``)
        UpdateUser.js// cmd -setState

//Kullanıcı Güncelleme ve Context Api   
    1-addusera basınca ana sayfaya git 
      this.props.history.push("/")
    2-
     UpdateUser
      updateUser
         updatedUser
      res = axios.put(id,yeniveri)
      //dispatch ile context api göndercez ve reducerımız stateimizi güncelliycek
      dispatch(type,payload)

      context.js
            updated_user
            her bir user üzerinde geziniyoz
            eğer userımızın idsi bana gönderilen idye eşitse
            güncelle
    
//Form Validation ve Bitiriş
    boş felan girerse değerleri eklemesin
    AddUser
        error
        validateForm true
        addUser
            validateForm falsesa error true
            
    UpdatedUser

*/
