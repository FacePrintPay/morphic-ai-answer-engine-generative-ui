import { tool } from 'ai'

import { getQuestionSchemaForModel } from '@/lib/schema/question'

/**
 * Creates a question tool with the appropriate schema for the specified model.
 */
export function createQuestionTool(fullModel: string) {
  return tool({
    description:
      'Ask a clarifying question with multiple options when more information is needed',
    parameters: getQuestionSchemaForModel(fullModel)
    // execute function removed to enable frontend confirmation
  })
}

// Default export for backward compatibility, using a default model
export const askQuestionTool = createQuestionTool('openai:gpt-4o-mini')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=question.ts
