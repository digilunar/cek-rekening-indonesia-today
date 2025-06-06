export interface Bank {
  value: string
  label: string
}

export interface CheckAccountRequest {
  bankCode: string
  accountNumber: string
}

export interface CheckAccountResponse {
  success: boolean
  data: {
    account_number: string
    account_name: string
    bank_code: string
    bank_name: string
  }
  message: string
}

export interface ApiError {
  message: string
  code?: string
  details?: string
}

export interface LoadingState {
  isLoading: boolean
  error: string | null
  data: CheckAccountResponse | null
}

export const BANKS: Bank[] = [
  // Banks
  { value: "harda", label: "Allo Bank/Bank Harda Internasional" },
  { value: "anz", label: "ANZ Indonesia" },
  { value: "aceh", label: "Bank Aceh Syariah" },
  { value: "aladin", label: "Bank Aladin Syariah" },
  { value: "amar", label: "Bank Amar Indonesia" },
  { value: "antardaerah", label: "Bank Antardaerah" },
  { value: "artha", label: "Bank Artha Graha Internasional" },
  { value: "bengkulu", label: "Bank Bengkulu" },
  { value: "daerah_istimewa", label: "Bank BPD DIY" },
  { value: "daerah_istimewa_syr", label: "Bank BPD DIY Syariah" },
  { value: "btpn_syr", label: "Bank BTPN Syariah" },
  { value: "bukopin_syr", label: "Bank Bukopin Syariah" },
  { value: "bumi_arta", label: "Bank Bumi Arta" },
  { value: "capital", label: "Bank Capital Indonesia" },
  { value: "bca", label: "BCA (Bank Central Asia)" },
  { value: "ccb", label: "Bank China Construction Bank Indonesia" },
  { value: "cnb", label: "Bank CNB (Centratama Nasional Bank)" },
  { value: "danamon", label: "Bank Danamon & Danamon Syariah" },
  { value: "dinar", label: "Bank Dinar Indonesia" },
  { value: "dki", label: "Bank DKI" },
  { value: "dki_syr", label: "Bank DKI Syariah" },
  { value: "ganesha", label: "Bank Ganesha" },
  { value: "agris", label: "Bank IBK Indonesia" },
  { value: "ina_perdana", label: "Bank Ina Perdana" },
  { value: "index_selindo", label: "Bank Index Selindo" },
  { value: "artos_syr", label: "Bank Jago Syariah" },
  { value: "jambi", label: "Bank Jambi" },
  { value: "jambi_syr", label: "Bank Jambi Syariah" },
  { value: "jasa_jakarta", label: "Bank Jasa Jakarta" },
  { value: "jawa_tengah", label: "Bank Jateng" },
  { value: "jawa_tengah_syr", label: "Bank Jateng Syariah" },
  { value: "jawa_timur", label: "Bank Jatim" },
  { value: "jawa_timur_syr", label: "Bank Jatim Syariah" },
  { value: "kalimantan_barat", label: "Bank Kalbar" },
  { value: "kalimantan_barat_syr", label: "Bank Kalbar Syariah" },
  { value: "kalimantan_selatan", label: "Bank Kalsel" },
  { value: "kalimantan_selatan_syr", label: "Bank Kalsel Syariah" },
  { value: "kalimantan_tengah", label: "Bank Kalteng" },
  { value: "kalimantan_timur_syr", label: "Bank Kaltim Syariah" },
  { value: "kalimantan_timur", label: "Bank Kaltimtara" },
  { value: "lampung", label: "Bank Lampung" },
  { value: "maluku", label: "Bank Maluku" },
  { value: "mandiri", label: "Bank Mandiri" },
  { value: "mantap", label: "Bank MANTAP (Mandiri Taspen)" },
  { value: "maspion", label: "Bank Maspion Indonesia" },
  { value: "mayapada", label: "Bank Mayapada" },
  { value: "mayora", label: "Bank Mayora Indonesia" },
  { value: "mega", label: "Bank Mega" },
  { value: "mega_syr", label: "Bank Mega Syariah" },
  { value: "mestika_dharma", label: "Bank Mestika Dharma" },
  { value: "mizuho", label: "Bank Mizuho Indonesia" },
  { value: "mas", label: "Bank Multi Arta Sentosa (Bank MAS)" },
  { value: "mutiara", label: "Bank Mutiara" },
  { value: "sumatera_barat", label: "Bank Nagari" },
  { value: "sumatera_barat_syr", label: "Bank Nagari Syariah" },
  { value: "nusa_tenggara_barat", label: "Bank NTB Syariah" },
  { value: "nusa_tenggara_timur", label: "Bank NTT" },
  { value: "nusantara_parahyangan", label: "Bank Nusantara Parahyangan" },
  { value: "ocbc", label: "Bank OCBC NISP" },
  { value: "ocbc_syr", label: "Bank OCBC NISP Syariah" },
  { value: "america_na", label: "Bank of America NA" },
  { value: "boc", label: "Bank of China (Hong Kong) Limited" },
  { value: "india", label: "Bank of India Indonesia" },
  { value: "tokyo", label: "Bank of Tokyo Mitsubishi UFJ" },
  { value: "papua", label: "Bank Papua" },
  { value: "prima", label: "Bank Prima Master" },
  { value: "bri", label: "Bank Rakyat Indonesia" },
  { value: "riau_dan_kepri", label: "Bank Riau Kepri" },
  { value: "sahabat_sampoerna", label: "Bank Sahabat Sampoerna" },
  { value: "shinhan", label: "Bank Shinhan Indonesia" },
  { value: "sinarmas", label: "Bank Sinarmas" },
  { value: "sinarmas_syr", label: "Bank Sinarmas Syariah" },
  { value: "sulselbar", label: "Bank Sulselbar" },
  { value: "sulselbar_syr", label: "Bank Sulselbar Syariah" },
  { value: "sulawesi", label: "Bank Sulteng" },
  { value: "sulawesi_tenggara", label: "Bank Sultra" },
  { value: "sulut", label: "Bank SulutGo" },
  { value: "sumsel_dan_babel", label: "Bank Sumsel Babel" },
  { value: "sumsel_dan_babel_syr", label: "Bank Sumsel Babel Syariah" },
  { value: "sumut", label: "Bank Sumut" },
  { value: "sumut_syr", label: "Bank Sumut Syariah" },
  { value: "resona_perdania", label: "Bank Resona Perdania" },
  { value: "victoria_internasional", label: "Bank Victoria International" },
  { value: "victoria_syr", label: "Bank Victoria Syariah" },
  { value: "woori", label: "Bank Woori Saudara" },
  { value: "bca_syr", label: "BCA (Bank Central Asia) Syariah" },
  { value: "bjb", label: "BJB" },
  { value: "bjb_syr", label: "BJB Syariah" },
  { value: "royal", label: "Blu/BCA Digital" },
  { value: "bni", label: "BNI (Bank Negara Indonesia)" },
  { value: "bnp_paribas", label: "BNP Paribas Indonesia" },
  { value: "bali", label: "BPD Bali" },
  { value: "banten", label: "BPD Banten" },
  { value: "eka", label: "BPR EKA (Bank Eka)" },
  { value: "agroniaga", label: "BRI Agroniaga" },
  { value: "bsm", label: "BSI (Bank Syariah Indonesia)" },
  { value: "btn", label: "BTN" },
  { value: "btn_syr", label: "BTN Syariah" },
  { value: "tabungan_pensiunan_nasional", label: "BTPN" },
  { value: "cimb", label: "CIMB Niaga & CIMB Niaga Syariah" },
  { value: "citibank", label: "Citibank" },
  { value: "commonwealth", label: "Commonwealth Bank" },
  { value: "chinatrust", label: "CTBC (Chinatrust) Indonesia" },
  { value: "dbs", label: "DBS Indonesia" },
  { value: "hsbc", label: "HSBC Indonesia" },
  { value: "icbc", label: "ICBC Indonesia" },
  { value: "artos", label: "Jago/Artos" },
  { value: "hana", label: "LINE Bank/KEB Hana" },
  { value: "bii", label: "Maybank Indonesia" },
  { value: "bii_syr", label: "Maybank Syariah" },
  { value: "mnc_internasional", label: "Motion/MNC Bank" },
  { value: "muamalat", label: "Muamalat" },
  { value: "yudha_bakti", label: "Neo Commerce/Yudha Bhakti" },
  { value: "nationalnobu", label: "Nobu (Nationalnobu) Bank" },
  { value: "panin", label: "Panin Bank" },
  { value: "panin_syr", label: "Panin Dubai Syariah" },
  { value: "permata", label: "Permata" },
  { value: "permata_syr", label: "Permata Syariah" },
  { value: "qnb_kesawan", label: "QNB Indonesia" },
  { value: "rabobank", label: "Rabobank International Indonesia" },
  { value: "sbi_indonesia", label: "SBI Indonesia" },
  { value: "kesejahteraan_ekonomi", label: "Seabank/Bank BKE" },
  { value: "standard_chartered", label: "Standard Chartered Bank" },
  { value: "super_bank", label: "Superbank" },
  { value: "uob", label: "TMRW/UOB" },
  { value: "bukopin", label: "Wokee/Bukopin" },
  { value: "krom", label: "Krom Bank Indonesia" }
]

export const EWALLETS: Bank[] = [
  { value: "ovo", label: "OVO" },
  { value: "dana", label: "DANA" },
  { value: "linkaja", label: "LinkAja" },
  { value: "gopay", label: "GoPay" },
  { value: "shopeepay", label: "ShopeePay" }
]

// Combine all options
export const ALL_BANKS = [...BANKS, ...EWALLETS] 