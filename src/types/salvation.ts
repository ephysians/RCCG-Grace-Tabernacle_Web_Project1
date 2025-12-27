export interface SalvationStep {
  id: string
  title: string
  content: string
  scripture?: string
}

export interface SalvationConfig {
  title: string
  subtitle: string
  steps: SalvationStep[]
}