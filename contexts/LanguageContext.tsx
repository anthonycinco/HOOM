'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'fil' | 'ko' | 'ja' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rent': 'Rent',
    'nav.buy': 'Buy',
    'nav.sell': 'Sell',
    'nav.manage': 'Manage',
    'nav.resources': 'Resources',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    
    // Hero Section
    'hero.title': 'Find your perfect',
    'hero.titleHighlight': 'student home',
    'hero.subtitle': 'Discover verified dormitories and apartments in Cebu. Safe, affordable, and perfect for students.',
    'hero.searchPlaceholder': 'Enter city or neighborhood',
    'hero.searchButton': 'Search Properties',
    'hero.students': 'Students',
    'hero.properties': 'Properties',
    'hero.cities': 'Cities',
    'hero.rating': 'Rating',
    
    // Features
    'features.title': 'Find your dream place to live in with more than',
    'features.titleHighlight': '10k+ properties',
    'features.titleEnd': 'listed.',
    'features.commission': 'On-Sale/Rent Commission',
    'features.propertyCount': 'Property in Sell & Rent',
    'features.transactions': 'Daily Transactions',
    
    // Properties
    'properties.title': 'Explore student housing in Cebu',
    'properties.subtitle': 'Discover verified properties perfect for students with modern amenities and great locations',
    'properties.exploreAll': 'Explore All Properties',
    'properties.month': '/month',
    'properties.beds': 'beds',
    'properties.baths': 'baths',
    'properties.popular': 'Popular',
    
    // Solution
    'solution.tenants.title': 'We make it easy for students to find housing',
    'solution.tenants.description': 'Whether you\'re looking for your first dormitory or upgrading to a better place, we simplify the search process and make it efficient. The best part? You\'ll save time and money with hoom\'s trusted, transparent platform.',
    'solution.landlords.title': 'We make it easy for landlords to manage properties',
    'solution.landlords.description': 'Whether you\'re listing your first property or managing multiple units, we simplify the rental process and make it efficient. The best part? You\'ll reach more students and maximize your income with hoom\'s trusted, transparent platform.',
    'solution.tenants': 'For Students',
    'solution.landlords': 'For Landlords',
    'solution.watchVideo': 'Watch Video',
    'solution.learnMore': 'Learn More',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Try Again',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.view': 'View',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',
    'common.yes': 'Yes',
    'common.no': 'No',
    
    // Accessibility
    'a11y.menu': 'Menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.search': 'Search properties',
    'a11y.filter': 'Filter properties',
    'a11y.favorite': 'Add to favorites',
    'a11y.removeFavorite': 'Remove from favorites',
    'a11y.toggleLanguage': 'Toggle language',
    'a11y.loading': 'Loading content',
    'a11y.error': 'Error occurred',
  },
  fil: {
    // Navigation
    'nav.home': 'Home',
    'nav.rent': 'Mag-rent',
    'nav.buy': 'Bumili',
    'nav.sell': 'Magbenta',
    'nav.manage': 'Pamahalaan',
    'nav.resources': 'Mga Resources',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.login': 'Mag-login',
    'nav.signup': 'Mag-signup',
    
    // Hero Section
    'hero.title': 'Hanapin ang inyong perpektong',
    'hero.titleHighlight': 'tahanan ng estudyante',
    'hero.subtitle': 'Tuklasin ang mga verified na dormitoryo at apartment sa Cebu. Ligtas, abot-kaya, at perpekto para sa mga estudyante.',
    'hero.searchPlaceholder': 'Ilagay ang lungsod o lugar',
    'hero.searchButton': 'Maghanap ng Properties',
    'hero.students': 'Mga Estudyante',
    'hero.properties': 'Mga Properties',
    'hero.cities': 'Mga Lungsod',
    'hero.rating': 'Rating',
    
    // Features
    'features.title': 'Hanapin ang inyong pangarap na lugar na tirahan na may higit sa',
    'features.titleHighlight': '10k+ properties',
    'features.titleEnd': 'na nakalista.',
    'features.commission': 'Commission sa Pagbenta/Rent',
    'features.propertyCount': 'Property sa Pagbenta at Rent',
    'features.transactions': 'Mga Arawang Transaksyon',
    
    // Properties
    'properties.title': 'Tuklasin ang student housing sa Cebu',
    'properties.subtitle': 'Tuklasin ang mga verified na properties na perpekto para sa mga estudyante na may modernong amenities at magandang lokasyon',
    'properties.exploreAll': 'Tuklasin Lahat ng Properties',
    'properties.month': '/buwan',
    'properties.beds': 'kama',
    'properties.baths': 'banyo',
    'properties.popular': 'Sikat',
    
    // Solution
    'solution.tenants.title': 'Ginagawa naming madali para sa mga estudyante na makahanap ng tirahan',
    'solution.tenants.description': 'Kung naghahanap ka ng inyong unang dormitoryo o nag-upgrade sa mas magandang lugar, ginagawa naming simple ang proseso ng paghahanap at maging efficient. Ang pinakamaganda? Makakatipid kayo ng oras at pera sa trusted, transparent platform ng hoom.',
    'solution.landlords.title': 'Ginagawa naming madali para sa mga landlords na pamahalaan ang mga properties',
    'solution.landlords.description': 'Kung nagli-list kayo ng inyong unang property o nagmamanage ng maraming units, ginagawa naming simple ang rental process at maging efficient. Ang pinakamaganda? Makakarating kayo sa mas maraming estudyante at ma-maximize ang inyong income sa trusted, transparent platform ng hoom.',
    'solution.tenants': 'Para sa mga Estudyante',
    'solution.landlords': 'Para sa mga Landlords',
    'solution.watchVideo': 'Panoorin ang Video',
    'solution.learnMore': 'Matuto Pa',
    
    // Common
    'common.loading': 'Naglo-load...',
    'common.error': 'May nangyaring mali',
    'common.retry': 'Subukan Muli',
    'common.close': 'Isara',
    'common.save': 'I-save',
    'common.cancel': 'Kanselahin',
    'common.search': 'Maghanap',
    'common.filter': 'I-filter',
    'common.sort': 'I-sort',
    'common.view': 'Tingnan',
    'common.edit': 'I-edit',
    'common.delete': 'I-delete',
    'common.confirm': 'Kumpirmahin',
    'common.yes': 'Oo',
    'common.no': 'Hindi',
    
    // Accessibility
    'a11y.menu': 'Menu',
    'a11y.closeMenu': 'Isara ang menu',
    'a11y.search': 'Maghanap ng properties',
    'a11y.filter': 'I-filter ang properties',
    'a11y.favorite': 'Idagdag sa favorites',
    'a11y.removeFavorite': 'Alisin sa favorites',
    'a11y.toggleLanguage': 'Palitan ang wika',
    'a11y.loading': 'Naglo-load ng content',
    'a11y.error': 'May nangyaring error',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.rent': '임대',
    'nav.buy': '구매',
    'nav.sell': '판매',
    'nav.manage': '관리',
    'nav.resources': '리소스',
    'nav.faq': 'FAQ',
    'nav.blog': '블로그',
    'nav.login': '로그인',
    'nav.signup': '회원가입',
    
    // Hero Section
    'hero.title': '완벽한',
    'hero.titleHighlight': '학생 숙소',
    'hero.subtitle': '세부에서 검증된 기숙사와 아파트를 발견하세요. 안전하고 저렴하며 학생에게 완벽합니다.',
    'hero.searchPlaceholder': '도시 또는 지역 입력',
    'hero.searchButton': '부동산 검색',
    'hero.students': '학생',
    'hero.properties': '부동산',
    'hero.cities': '도시',
    'hero.rating': '평점',
    
    // Features
    'features.title': '10,000개 이상의',
    'features.titleHighlight': '부동산',
    'features.titleEnd': '에서 꿈의 거주지를 찾아보세요.',
    'features.commission': '판매/임대 수수료',
    'features.propertyCount': '판매 및 임대 부동산',
    'features.transactions': '일일 거래',
    
    // Properties
    'properties.title': '세부의 학생 숙소 탐색',
    'properties.subtitle': '현대적인 편의시설과 훌륭한 위치의 학생에게 완벽한 검증된 부동산을 발견하세요',
    'properties.exploreAll': '모든 부동산 탐색',
    'properties.month': '/월',
    'properties.beds': '침실',
    'properties.baths': '욕실',
    'properties.popular': '인기',
    
    // Solution
    'solution.tenants.title': '학생들이 주거를 쉽게 찾을 수 있도록 도와드립니다',
    'solution.tenants.description': '첫 기숙사를 찾거나 더 나은 곳으로 업그레이드하든, 검색 과정을 단순화하고 효율적으로 만듭니다. 가장 좋은 점? hoom의 신뢰할 수 있고 투명한 플랫폼으로 시간과 돈을 절약할 수 있습니다.',
    'solution.landlords.title': '집주인이 부동산을 쉽게 관리할 수 있도록 도와드립니다',
    'solution.landlords.description': '첫 부동산을 등록하거나 여러 단위를 관리하든, 임대 과정을 단순화하고 효율적으로 만듭니다. 가장 좋은 점? hoom의 신뢰할 수 있고 투명한 플랫폼으로 더 많은 학생들에게 도달하고 수입을 극대화할 수 있습니다.',
    'solution.tenants': '학생용',
    'solution.landlords': '집주인용',
    'solution.watchVideo': '비디오 보기',
    'solution.learnMore': '더 알아보기',
    
    // Common
    'common.loading': '로딩 중...',
    'common.error': '문제가 발생했습니다',
    'common.retry': '다시 시도',
    'common.close': '닫기',
    'common.save': '저장',
    'common.cancel': '취소',
    'common.search': '검색',
    'common.filter': '필터',
    'common.sort': '정렬',
    'common.view': '보기',
    'common.edit': '편집',
    'common.delete': '삭제',
    'common.confirm': '확인',
    'common.yes': '예',
    'common.no': '아니오',
    
    // Accessibility
    'a11y.menu': '메뉴',
    'a11y.closeMenu': '메뉴 닫기',
    'a11y.search': '부동산 검색',
    'a11y.filter': '부동산 필터링',
    'a11y.favorite': '즐겨찾기에 추가',
    'a11y.removeFavorite': '즐겨찾기에서 제거',
    'a11y.toggleLanguage': '언어 전환',
    'a11y.loading': '콘텐츠 로딩 중',
    'a11y.error': '오류 발생',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.rent': 'レンタル',
    'nav.buy': '購入',
    'nav.sell': '売却',
    'nav.manage': '管理',
    'nav.resources': 'リソース',
    'nav.faq': 'FAQ',
    'nav.blog': 'ブログ',
    'nav.login': 'ログイン',
    'nav.signup': 'サインアップ',
    
    // Hero Section
    'hero.title': '完璧な',
    'hero.titleHighlight': '学生向け住宅',
    'hero.subtitle': 'セブで検証済みの寮やアパートを発見。安全で手頃な価格、学生に最適です。',
    'hero.searchPlaceholder': '都市または地域を入力',
    'hero.searchButton': '物件を検索',
    'hero.students': '学生',
    'hero.properties': '物件',
    'hero.cities': '都市',
    'hero.rating': '評価',
    
    // Features
    'features.title': '10,000件以上の',
    'features.titleHighlight': '物件',
    'features.titleEnd': 'から理想の住まいを見つけよう。',
    'features.commission': '売却/レンタル手数料',
    'features.propertyCount': '売却・レンタル物件',
    'features.transactions': '日次取引',
    
    // Properties
    'properties.title': 'セブの学生向け住宅を探索',
    'properties.subtitle': 'モダンな設備と素晴らしい立地の学生に最適な検証済み物件を発見',
    'properties.exploreAll': 'すべての物件を探索',
    'properties.month': '/月',
    'properties.beds': 'ベッド',
    'properties.baths': 'バス',
    'properties.popular': '人気',
    
    // Solution
    'solution.tenants.title': '学生が住宅を見つけやすくします',
    'solution.tenants.description': '初めての寮を探している場合でも、より良い場所にアップグレードしている場合でも、検索プロセスを簡素化し、効率的にします。最も良い点は？hoomの信頼できる透明なプラットフォームで時間とお金を節約できることです。',
    'solution.landlords.title': '大家が物件を管理しやすくします',
    'solution.landlords.description': '初めての物件を掲載している場合でも、複数のユニットを管理している場合でも、賃貸プロセスを簡素化し、効率的にします。最も良い点は？hoomの信頼できる透明なプラットフォームでより多くの学生にリーチし、収入を最大化できることです。',
    'solution.tenants': '学生向け',
    'solution.landlords': '大家向け',
    'solution.watchVideo': '動画を見る',
    'solution.learnMore': 'もっと学ぶ',
    
    // Common
    'common.loading': '読み込み中...',
    'common.error': 'エラーが発生しました',
    'common.retry': '再試行',
    'common.close': '閉じる',
    'common.save': '保存',
    'common.cancel': 'キャンセル',
    'common.search': '検索',
    'common.filter': 'フィルター',
    'common.sort': '並び替え',
    'common.view': '表示',
    'common.edit': '編集',
    'common.delete': '削除',
    'common.confirm': '確認',
    'common.yes': 'はい',
    'common.no': 'いいえ',
    
    // Accessibility
    'a11y.menu': 'メニュー',
    'a11y.closeMenu': 'メニューを閉じる',
    'a11y.search': '物件を検索',
    'a11y.filter': '物件をフィルター',
    'a11y.favorite': 'お気に入りに追加',
    'a11y.removeFavorite': 'お気に入りから削除',
    'a11y.toggleLanguage': '言語を切り替え',
    'a11y.loading': 'コンテンツを読み込み中',
    'a11y.error': 'エラーが発生しました',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.rent': '租房',
    'nav.buy': '买房',
    'nav.sell': '卖房',
    'nav.manage': '管理',
    'nav.resources': '资源',
    'nav.faq': '常见问题',
    'nav.blog': '博客',
    'nav.login': '登录',
    'nav.signup': '注册',
    
    // Hero Section
    'hero.title': '寻找您完美的',
    'hero.titleHighlight': '学生住房',
    'hero.subtitle': '发现宿务经过验证的宿舍和公寓。安全、实惠，完美适合学生。',
    'hero.searchPlaceholder': '输入城市或社区',
    'hero.searchButton': '搜索房产',
    'hero.students': '学生',
    'hero.properties': '房产',
    'hero.cities': '城市',
    'hero.rating': '评分',
    
    // Features
    'features.title': '在超过',
    'features.titleHighlight': '10,000个房产',
    'features.titleEnd': '中找到您的梦想住所。',
    'features.commission': '销售/租赁佣金',
    'features.propertyCount': '销售和租赁房产',
    'features.transactions': '每日交易',
    
    // Properties
    'properties.title': '探索宿务的学生住房',
    'properties.subtitle': '发现具有现代设施和优越位置的学生完美验证房产',
    'properties.exploreAll': '探索所有房产',
    'properties.month': '/月',
    'properties.beds': '卧室',
    'properties.baths': '浴室',
    'properties.popular': '热门',
    
    // Solution
    'solution.tenants.title': '我们让学生轻松找到住房',
    'solution.tenants.description': '无论您是在寻找第一个宿舍还是升级到更好的地方，我们都简化搜索过程并使其高效。最好的部分？您将通过hoom值得信赖的透明平台节省时间和金钱。',
    'solution.landlords.title': '我们让房东轻松管理房产',
    'solution.landlords.description': '无论您是首次列出房产还是管理多个单元，我们都简化租赁过程并使其高效。最好的部分？您将通过hoom值得信赖的透明平台接触更多学生并最大化收入。',
    'solution.tenants': '学生版',
    'solution.landlords': '房东版',
    'solution.watchVideo': '观看视频',
    'solution.learnMore': '了解更多',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '出现错误',
    'common.retry': '重试',
    'common.close': '关闭',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.sort': '排序',
    'common.view': '查看',
    'common.edit': '编辑',
    'common.delete': '删除',
    'common.confirm': '确认',
    'common.yes': '是',
    'common.no': '否',
    
    // Accessibility
    'a11y.menu': '菜单',
    'a11y.closeMenu': '关闭菜单',
    'a11y.search': '搜索房产',
    'a11y.filter': '筛选房产',
    'a11y.favorite': '添加到收藏',
    'a11y.removeFavorite': '从收藏中移除',
    'a11y.toggleLanguage': '切换语言',
    'a11y.loading': '加载内容中',
    'a11y.error': '发生错误',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('hoom-language') as Language || 'en'
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('hoom-language', language)
    // Update document language
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
