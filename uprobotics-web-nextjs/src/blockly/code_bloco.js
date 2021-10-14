Blockly.JavaScript['wait_seconds'] = function(block) {
  var text_seconds_value = block.getFieldValue('seconds_value');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">passive_wait</font><font color="#000000">(</font><font color="#000000">'+text_seconds_value+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['gripper'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">gripper_'+dropdown_name+'</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['base'] = function(block) {
  var dropdown_base = block.getFieldValue('base');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">base_strafe_'+dropdown_base+'</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['car'] = function(block) {
  var dropdown_car_base = block.getFieldValue('car_base');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">'+dropdown_commands+'</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['manual_option'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_commands = block.getFieldValue('commands');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">'+dropdown_commands+'</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['automatic_behavior'] = function(block) {
  var statements_behavior = Blockly.JavaScript.statementToCode(block, 'behavior');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre><font color="#00979c">static</font> <font color="#00979c">void</font> <font color="#000000">automatic_behavior</font><font color="#000000">(</font><font color="#000000">)</font> <font color="#000000">{</font>&nbsp;<font color="#000000">'+statements_behavior+'</font><font color="#000000">}</font></pre>\n';
  return code;
};

Blockly.JavaScript['manual_behavior'] = function(block) {
  var statements_behavior = Blockly.JavaScript.statementToCode(block, 'behavior');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['height_arm'] = function(block) {
  var dropdown_altura = block.getFieldValue('altura');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">arm_set_height</font><font color="#000000">(</font><font color="#000000">'+dropdown_altura+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['orientation_arm'] = function(block) {
  var dropdown_orientacao = block.getFieldValue('orientacao');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">arm_set_orientation</font><font color="#000000">(</font><font color="#000000">'+dropdown_orientacao+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};

Blockly.JavaScript['arm_reset'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">arm_reset</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font></pre>\n';
  return code;
};