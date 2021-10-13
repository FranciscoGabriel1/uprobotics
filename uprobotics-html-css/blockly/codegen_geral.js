Blockly.JavaScript['youbot'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  var statements_manual = Blockly.JavaScript.statementToCode(block, 'manual');
  // TODO: Assemble JavaScript into code variable.
  var code = `<pre>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">webots</font><font color="#434f54">&#47;</font><font color="#000000">keyboard</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">webots</font><font color="#434f54">&#47;</font><font color="#000000">robot</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">arm</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">base</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">gripper</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">math</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">stdio</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">stdlib</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  <font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><font color="#000000">string</font><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font>
  
  <font color="#5e6d03">#define</font> <font color="#000000">TIME_STEP</font> <font color="#000000">32</font>
  
  <font color="#00979c">static</font> <font color="#00979c">void</font> <font color="#d35400">step</font><font color="#000000">(</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;<font color="#5e6d03">if</font> <font color="#000000">(</font><font color="#000000">wb_robot_step</font><font color="#000000">(</font><font color="#000000">TIME_STEP</font><font color="#000000">)</font> <font color="#434f54">==</font> <font color="#434f54">-</font><font color="#000000">1</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;&nbsp;&nbsp;<font color="#000000">wb_robot_cleanup</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;&nbsp;&nbsp;<font color="#d35400">exit</font><font color="#000000">(</font><font color="#000000">EXIT_SUCCESS</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">}</font>
  <font color="#000000">}</font>
  
  <font color="#00979c">static</font> <font color="#00979c">void</font> <font color="#000000">passive_wait</font><font color="#000000">(</font><font color="#00979c">double</font> <font color="#000000">sec</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;<font color="#00979c">double</font> <font color="#000000">start_time</font> <font color="#434f54">=</font> <font color="#000000">wb_robot_get_time</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#5e6d03">do</font> <font color="#000000">{</font>
   &nbsp;&nbsp;&nbsp;<font color="#d35400">step</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">}</font> <font color="#5e6d03">while</font> <font color="#000000">(</font><font color="#000000">start_time</font> <font color="#434f54">+</font> <font color="#000000">sec</font> <font color="#434f54">&gt;</font> <font color="#000000">wb_robot_get_time</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">)</font><font color="#000000">;</font>
  <font color="#000000">}</font>
  
  </pre>`+statements_automatic+`<pre>
  <font color="#00979c">int</font> <font color="#000000">main</font><font color="#000000">(</font><font color="#00979c">int</font> <font color="#000000">argc</font><font color="#434f54">,</font> <font color="#00979c">char</font> <font color="#434f54">*</font><font color="#434f54">*</font><font color="#000000">argv</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;<font color="#000000">wb_robot_init</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
  
   &nbsp;<font color="#000000">base_init</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">arm_init</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">gripper_init</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">passive_wait</font><font color="#000000">(</font><font color="#000000">2.0</font><font color="#000000">)</font><font color="#000000">;</font>
  
   &nbsp;<font color="#5e6d03">if</font> <font color="#000000">(</font><font color="#000000">argc</font> <font color="#434f54">&gt;</font> <font color="#000000">1</font> <font color="#434f54">&amp;&amp;</font> <font color="#d35400">strcmp</font><font color="#000000">(</font><font color="#000000">argv</font><font color="#000000">[</font><font color="#000000">1</font><font color="#000000">]</font><font color="#434f54">,</font> <font color="#005c5f">&#34;demo&#34;</font><font color="#000000">)</font> <font color="#434f54">==</font> <font color="#000000">0</font><font color="#000000">)</font>
   &nbsp;&nbsp;&nbsp;<font color="#000000">automatic_behavior</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;<font color="#00979c">int</font> <font color="#000000">pc</font> <font color="#434f54">=</font> <font color="#000000">0</font><font color="#000000">;</font>
   &nbsp;<font color="#000000">wb_keyboard_enable</font><font color="#000000">(</font><font color="#000000">TIME_STEP</font><font color="#000000">)</font><font color="#000000">;</font>
  
   &nbsp;<font color="#5e6d03">while</font> <font color="#000000">(</font><font color="#00979c">true</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;&nbsp;&nbsp;<font color="#d35400">step</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
  
   &nbsp;&nbsp;&nbsp;<font color="#00979c">int</font> <font color="#000000">c</font> <font color="#434f54">=</font> <font color="#000000">wb_keyboard_get_key</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
   &nbsp;&nbsp;&nbsp;<font color="#5e6d03">if</font> <font color="#000000">(</font><font color="#000000">(</font><font color="#000000">c</font> <font color="#434f54">&gt;=</font> <font color="#000000">0</font><font color="#000000">)</font> <font color="#434f54">&amp;&amp;</font> <font color="#000000">c</font> <font color="#434f54">!=</font> <font color="#000000">pc</font><font color="#000000">)</font> <font color="#000000">{</font>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#5e6d03">switch</font> <font color="#000000">(</font><font color="#000000">c</font><font color="#000000">)</font> <font color="#000000">{</font>
  
  </pre>`+statements_manual+`<pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#5e6d03">default</font><font color="#434f54">:</font>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#d35400">fprintf</font><font color="#000000">(</font><font color="#000000">stderr</font><font color="#434f54">,</font> <font color="#005c5f">&#34;Wrong keyboard input\n&#34;</font><font color="#000000">)</font><font color="#000000">;</font>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#5e6d03">break</font><font color="#000000">;</font>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000000">}</font>
  &nbsp;&nbsp;&nbsp;<font color="#000000">}</font>
  &nbsp;&nbsp;&nbsp;<font color="#000000">pc</font> <font color="#434f54">=</font> <font color="#000000">c</font><font color="#000000">;</font>
  &nbsp;<font color="#000000">}</font>
 
  &nbsp;<font color="#000000">wb_robot_cleanup</font><font color="#000000">(</font><font color="#000000">)</font><font color="#000000">;</font>
 
  &nbsp;<font color="#5e6d03">return</font> <font color="#000000">0</font><font color="#000000">;</font>
 <font color="#000000">}</font>
 
 </pre>`;
  return code;
};

Blockly.JavaScript['spot'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  var statements_manual = Blockly.JavaScript.statementToCode(block, 'manual');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['e_puck'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mavic'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  var statements_manual = Blockly.JavaScript.statementToCode(block, 'manual');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bb8'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  var statements_manual = Blockly.JavaScript.statementToCode(block, 'manual');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sojourney'] = function(block) {
  var statements_automatic = Blockly.JavaScript.statementToCode(block, 'automatic');
  var statements_manual = Blockly.JavaScript.statementToCode(block, 'manual');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};