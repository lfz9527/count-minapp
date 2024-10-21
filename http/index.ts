type RequestOptionsMethod = 'GET' | 'POST'

interface baseConfig {
  url: string
  method?: RequestOptionsMethod
  header?: any
  data?: Record<string, any>
  params?: Record<string, any>
}


const http = <T>(config:baseConfig)=>{
	
}

export default http