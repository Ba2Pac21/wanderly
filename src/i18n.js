const TR = {
  app:{name:"Wanderly",hello:"Merhaba",level:"Seviye",today:"Bugün",community:"Topluluk",stats:"İstatistik",history:"Geçmiş",settings:"Ayarlar"},
  auth:{title:"Her gün yeni bir macera",loginGoogle:"Google ile Giriş Yap",registerGoogle:"Google ile Kayıt Ol",or:"veya",email:"Email",password:"Şifre (min 6 karakter)",login:"Giriş Yap",register:"Kayıt Ol",noAccount:"Hesabın yok mu?",hasAccount:"Zaten hesabın var mı?",emailInUse:"Bu email zaten kayıtlı.",weakPassword:"Şifre en az 6 karakter olmalı.",wrongCredentials:"Email veya şifre hatalı.",registerError:"Kayıt hatası",loginError:"Giriş hatası",googleError:"Google giriş hatası."},
  profile:{title:"Profilini Oluştur",subtitle:"Toplulukta nasıl görünmek istersin?",username:"Kullanıcı adı (örn: kasifattt)",displayName:"Görünen isim (örn: Batuhan)",addPhoto:"Profil fotoğrafı ekle",create:"Profili Oluştur ✨",creating:"Oluşturuluyor...",usernameMin:"Kullanıcı adı en az 3 karakter.",usernameTaken:"Bu kullanıcı adı alınmış.",displayRequired:"Görünen isim gerekli.",profileError:"Profil oluşturma hatası."},
  onboarding:{interests:"Nelerden hoşlanırsın?",interestsSub:"En az 2 kategori seç",difficulty:"Zorluk seviyeni seç",location:"Konum bazlı maceralar",locationSub:"Konumunu paylaşırsan gerçek mekanları keşfedersin!",locationFound:"Konum alındı!",locationSearch:"Aranıyor...",shareLocation:"Konumumu Paylaş",startAdventure:"Maceraya Başla 🚀",skipLocation:"Konumsuz Devam Et →",continue:"Devam →",start:"Başlayalım →",placesFound:"{n} mekan bulundu"},
  adventure:{completed:"Tamamladım!",skip:"Başka macera ({n} hak)",skipDone:"Bugünkü değiştirme hakkın bitti",howWasIt:"Nasıl geçti? (opsiyonel)",addPhoto:"Fotoğraf ekle",save:"🎉 Kaydet",tip:"İpucu",nearby:"Yakınında"},
  done:{title:"Bugünkü macera tamam!",great:"Harika iş!",streak:"{n} günlük seri 🔥",bonus:"🎲 Bonus macera iste"},
  envSelect:{title:"Bugün nerede macera yapmak istersin?",subtitle:"Sana uygun görev verelim"},
  community:{all:"Tümü",loading:"Topluluk yükleniyor...",empty:"Henüz paylaşım yok. İlk maceranı tamamla!",emptyCategory:"Bu kategoride paylaşım yok.",you:"Sen",firstComment:"İlk yorumu sen yaz!",writeComment:"Yorum yaz...",send:"Gönder",refresh:"🔄 Yenile",deleteComment:"Yorumu silmek istediğine emin misin?",deletePost:"Paylaşımı silmek istediğine emin misin?",viewOnMap:"Haritada Gör"},
  stats:{level:"Seviye",adventures:"Macera",streak:"Seri",best:"En İyi",day:"gün",badges:"Rozetler",categoryProgress:"Kategori İlerlemesi",nearbyPlaces:"Yakınındaki mekanlar"},
  settings:{title:"Ayarlar",location:"Konum",locationBased:"Konum bazlı maceralar",locationOn:"Açık ✓",locationOff:"Aç",active:"Aktif",disabled:"Kapalı",places:"{n} mekan",difficulty:"Zorluk",categories:"Kategoriler",minCategories:"En az 2 kategori seçili olmalı",changePhoto:"Fotoğrafa tıklayarak değiştir",logout:"🚪 Çıkış Yap",logoutConfirm:"Çıkış yapmak istediğine emin misin?",reset:"🗑️ Yerel verileri sıfırla",resetConfirm:"Tüm yerel veriler silinecek. Emin misin?",language:"Dil"},
  categories:{explore:"Keşif",social:"Sosyal",creative:"Yaratıcı",mindful:"Farkındalık",food:"Lezzet",fitness:"Hareket"},
  difficulty:{easy:"Kolay",easySub:"Konfor alanında",medium:"Cesur",mediumSub:"Biraz zorlayıcı",hard:"Çılgın",hardSub:"Sınırları zorla"},
  environments:{home:"Evde",homeSub:"Evden çıkmadan",outdoor:"Dışarıda",outdoorSub:"Sokak, park, doğa",place:"Mekanda",placeSub:"Kafe, müze, çarşı",any:"Fark etmez",anySub:"Sürpriz olsun"},
  badges:{first:"İlk Adım",five:"Beşli",ten:"On Numara",twenty:"Yirmi Devrim",month:"Ay Yıldızı",fifty:"Efsane Kaşif",streak3:"3 Gün Serisi",streak7:"7 Gün Serisi",streak14:"14 Gün Serisi",allcat:"Her Şeyci",location:"Gezgin"},
  map:{openMap:"📍 Haritada Aç",directions:"Yol tarifi al"}
};

const EN = {
  app:{name:"Wanderly",hello:"Hello",level:"Level",today:"Today",community:"Community",stats:"Stats",history:"History",settings:"Settings"},
  auth:{title:"A new adventure every day",loginGoogle:"Sign in with Google",registerGoogle:"Sign up with Google",or:"or",email:"Email",password:"Password (min 6 characters)",login:"Sign In",register:"Sign Up",noAccount:"Don't have an account?",hasAccount:"Already have an account?",emailInUse:"This email is already registered.",weakPassword:"Password must be at least 6 characters.",wrongCredentials:"Invalid email or password.",registerError:"Registration error",loginError:"Login error",googleError:"Google sign-in error."},
  profile:{title:"Create Your Profile",subtitle:"How do you want to appear in the community?",username:"Username (e.g. adventurer21)",displayName:"Display name (e.g. John)",addPhoto:"Add profile photo",create:"Create Profile ✨",creating:"Creating...",usernameMin:"Username must be at least 3 characters.",usernameTaken:"This username is taken.",displayRequired:"Display name is required.",profileError:"Profile creation error."},
  onboarding:{interests:"What are you into?",interestsSub:"Select at least 2 categories",difficulty:"Choose your difficulty level",location:"Location-based adventures",locationSub:"Share your location to discover real places!",locationFound:"Location found!",locationSearch:"Searching...",shareLocation:"Share My Location",startAdventure:"Start Adventure 🚀",skipLocation:"Continue Without Location →",continue:"Continue →",start:"Let's Go →",placesFound:"{n} places found"},
  adventure:{completed:"I did it!",skip:"Different adventure ({n} left)",skipDone:"No more skips today",howWasIt:"How did it go? (optional)",addPhoto:"Add photo",save:"🎉 Save",tip:"Tip",nearby:"Nearby"},
  done:{title:"Today's adventure is done!",great:"Great job!",streak:"{n} day streak 🔥",bonus:"🎲 Request bonus adventure"},
  envSelect:{title:"Where do you want to adventure today?",subtitle:"We'll give you a matching quest"},
  community:{all:"All",loading:"Loading community...",empty:"No posts yet. Complete your first adventure!",emptyCategory:"No posts in this category.",you:"You",firstComment:"Be the first to comment!",writeComment:"Write a comment...",send:"Send",refresh:"🔄 Refresh",deleteComment:"Are you sure you want to delete this comment?",deletePost:"Are you sure you want to delete this post?",viewOnMap:"View on Map"},
  stats:{level:"Level",adventures:"Adventures",streak:"Streak",best:"Best",day:"days",badges:"Badges",categoryProgress:"Category Progress",nearbyPlaces:"Nearby places"},
  settings:{title:"Settings",location:"Location",locationBased:"Location-based adventures",locationOn:"On ✓",locationOff:"Turn On",active:"Active",disabled:"Disabled",places:"{n} places",difficulty:"Difficulty",categories:"Categories",minCategories:"At least 2 categories must be selected",changePhoto:"Tap photo to change",logout:"🚪 Log Out",logoutConfirm:"Are you sure you want to log out?",reset:"🗑️ Reset local data",resetConfirm:"All local data will be deleted. Are you sure?",language:"Language"},
  categories:{explore:"Explore",social:"Social",creative:"Creative",mindful:"Mindful",food:"Food",fitness:"Fitness"},
  difficulty:{easy:"Easy",easySub:"Comfort zone",medium:"Bold",mediumSub:"A bit challenging",hard:"Extreme",hardSub:"Push your limits"},
  environments:{home:"Home",homeSub:"Without leaving home",outdoor:"Outdoor",outdoorSub:"Streets, parks, nature",place:"Venue",placeSub:"Café, museum, market",any:"Surprise",anySub:"Let fate decide"},
  badges:{first:"First Step",five:"High Five",ten:"Perfect Ten",twenty:"Twenty Revolution",month:"Moon Star",fifty:"Legend Explorer",streak3:"3 Day Streak",streak7:"7 Day Streak",streak14:"14 Day Streak",allcat:"All Rounder",location:"Traveler"},
  map:{openMap:"📍 Open in Maps",directions:"Get directions"}
};

export const LANGUAGES = { tr: TR, en: EN };
export function t(lang, path) {
  const keys = path.split(".");
  let obj = LANGUAGES[lang] || TR;
  for (const k of keys) { obj = obj?.[k]; }
  return obj || path;
}
export function tf(lang, path, vars) {
  let str = t(lang, path);
  if (typeof str === "string" && vars) {
    Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  }
  return str;
}

// Additional translations for DM, Profile, Notifications
export function addTranslations(lang) {
  return {
    dm: lang === "en" ? {
      title: "Messages",
      noConversations: "No messages yet",
      startChat: "Start a conversation from someone's profile!",
      typeMessage: "Type a message...",
      send: "Send",
      you: "You",
      online: "Online",
      back: "← Back"
    } : {
      title: "Mesajlar",
      noConversations: "Henüz mesaj yok",
      startChat: "Birinin profilinden sohbet başlat!",
      typeMessage: "Mesaj yaz...",
      send: "Gönder",
      you: "Sen",
      online: "Çevrimiçi",
      back: "← Geri"
    },
    userProfile: lang === "en" ? {
      adventures: "Adventures",
      level: "Level",
      streak: "Best Streak",
      days: "days",
      posts: "Posts",
      noPosts: "No posts yet",
      sendMessage: "💬 Send Message",
      back: "← Back"
    } : {
      adventures: "Macera",
      level: "Seviye",
      streak: "En İyi Seri",
      days: "gün",
      posts: "Paylaşımlar",
      noPosts: "Henüz paylaşım yok",
      sendMessage: "💬 Mesaj Gönder",
      back: "← Geri"
    },
    notifications: lang === "en" ? {
      enable: "🔔 Enable Notifications",
      enabled: "Notifications On ✓",
      denied: "Notifications blocked by browser",
      daily: "Daily adventure reminder",
      permission: "Allow notifications to get daily reminders"
    } : {
      enable: "🔔 Bildirimleri Aç",
      enabled: "Bildirimler Açık ✓",
      denied: "Bildirimler tarayıcı tarafından engellendi",
      daily: "Günlük macera hatırlatması",
      permission: "Günlük hatırlatma almak için bildirimlere izin ver"
    }
  };
}

export function friendTranslations(lang) {
  return lang === "en" ? {
    friends: "Friends",
    messages: "Messages", 
    requests: "Requests",
    addFriend: "Add Friend",
    searchPlaceholder: "Search username...",
    search: "Search",
    sendRequest: "Add",
    requestSent: "Sent ✓",
    alreadyFriends: "Already friends",
    pending: "Pending",
    accept: "Accept",
    reject: "Decline",
    remove: "Remove",
    removeFriend: "Remove this friend?",
    noFriends: "No friends yet",
    noFriendsSub: "Search by username to add friends!",
    noRequests: "No pending requests",
    incomingRequests: "Friend Requests",
    sentRequests: "Sent Requests",
    friendAdded: "Friend added!",
    requestSentMsg: "Request sent!",
    userNotFound: "User not found",
    cantAddSelf: "Can't add yourself",
    startChat: "Message"
  } : {
    friends: "Arkadaşlar",
    messages: "Mesajlar",
    requests: "İstekler",
    addFriend: "Arkadaş Ekle",
    searchPlaceholder: "Kullanıcı adı ara...",
    search: "Ara",
    sendRequest: "Ekle",
    requestSent: "Gönderildi ✓",
    alreadyFriends: "Zaten arkadaş",
    pending: "Bekliyor",
    accept: "Kabul Et",
    reject: "Reddet",
    remove: "Kaldır",
    removeFriend: "Bu arkadaşı kaldırmak istediğine emin misin?",
    noFriends: "Henüz arkadaş yok",
    noFriendsSub: "Kullanıcı adı ile arkadaş ekle!",
    noRequests: "Bekleyen istek yok",
    incomingRequests: "Arkadaşlık İstekleri",
    sentRequests: "Gönderilen İstekler",
    friendAdded: "Arkadaş eklendi!",
    requestSentMsg: "İstek gönderildi!",
    userNotFound: "Kullanıcı bulunamadı",
    cantAddSelf: "Kendini ekleyemezsin",
    startChat: "Mesaj"
  };
}
