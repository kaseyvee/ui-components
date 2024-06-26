import MessageCanvas from './messageCanvas'

describe('MessageCanvas', () => {
  const testMessage = {
    id: '1',
    timestamp: '2020-01-02T00:00:00.000Z',
    sender: 'senderId',
    conversationId: 'lkd9vc',
    topicId: 'default',
    format: 'text',
    data: { text: 'Hello World' },
  }

  const testMessageUpdate = {
    ...testMessage,
    lastThreadMessage: {
      id: '3',
      timestamp: '2020-01-02T00:00:00.000Z',
      sender: 'senderId',
      conversationId: 'lkd9vc',
      topicId: 'default',
      threadId: '2',
      format: 'text',
      data: { text: '!' },
    },
  }

  it('renders children', () => {
    cy.mount(
      <MessageCanvas message={testMessage}>
        <p>Hello World</p>
      </MessageCanvas>
    )

    cy.contains('Hello World').should('be.visible')
  })

  it('renders sender name if provided', () => {
    cy.mount(
      <MessageCanvas message={testMessage}>
        <p>Hello World</p>
      </MessageCanvas>
    )

    cy.get('[data-cy="sender"]').should('contain', 'senderId')
  })

  it('renders formatted timestamp', () => {
    cy.mount(
      <MessageCanvas message={testMessage}>
        <p>Hello World</p>
      </MessageCanvas>
    )

    cy.contains('Jan 1 2020').should('be.visible')
  })

  it('shows that it was last updated if an update is provided', () => {
    cy.mount(
      <MessageCanvas message={testMessageUpdate}>
        <p>Hello World</p>
      </MessageCanvas>
    )

    cy.contains('last updated').should('be.visible')
  })
})
