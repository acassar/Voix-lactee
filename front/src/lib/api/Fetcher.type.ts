export type StrapiResponse<T> = {
  data: T
  error?: {
    message: string
    status: number
    name: string
    details?: unknown
  }
}
