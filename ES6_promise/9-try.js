function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (error) {
    return [error.toString(), 'Guardrail was processed'];
  }
}

module.exports = guardrail;
