import compose from '../src/compose'

describe('test compose', () => {
  const greeting = (name) => {
    return `Hello, ${name}`
  }
  const male = (name) => {
    return `Mr. ${name}`
  }

  const frendlyGreeting = compose(greeting, male)

  it('frendlyGreeting should be function', () => {
    assert.equal('function', typeof frendlyGreeting)
  })

  it('frendlyGreeting("Wu") should be return "Hello, Mr. Wu"', () => {
    assert.equal('Hello, Mr. Wu', frendlyGreeting('Wu'))
  })
})
