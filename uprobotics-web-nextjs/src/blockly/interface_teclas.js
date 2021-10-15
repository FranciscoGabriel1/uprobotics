Blockly.Blocks['click'] = {
  init: function() {
    this.appendValueInput("click")
        .setCheck(null)
        .appendField("quando eu clicar em");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tecla_dupla'] = {
  init: function() {
    this.appendValueInput("tc1")
        .setCheck(null)
        .appendField("quando eu pressionar a tecla");
    this.appendValueInput("tc2")
        .setCheck(null)
        .appendField("e a tecla");
    this.appendDummyInput()
        .appendField(" faça isso:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tecla_simples'] = {
  init: function() {
    this.appendValueInput("tc1")
        .setCheck(null)
        .appendField("quando eu pressionar a tecla");
    this.appendDummyInput()
        .appendField(" faça isso:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_pagedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("page down");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_pageup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("page up");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABn0lEQVRoge2aQU7DMBBFI+5A1JQjhSNwjAIHKNcqC1gBZUMX3IOwKKvHIlMUNXHisR3HEv6bRup0+p6mUtxOiyInJ8cpwDWwA75ZPg0tS62VeFgYfCxbzSQAjsAGqFwmGjJABdwKE9hMBniU4k0ERlWAO2Hb2RQ3UryKwKYKsBK2L5tiACJwOcXEd7EEzBzJIqkli6SWLJJaskhqUYsAT8AeKEPDACXwDjyHaDZ6RAFepeQQUkYkDtL7xZXPuhC4BD6k7DPEMX+gp/HAGkzE8MbOMhoJWz5VYQgZrYSGT3WM95FxkVDxaUQMQJMyrhIqPq2IAcwo4yOh4nMRMQD2ZHwlVHyuIgbQauQ5p98EoojI63syoSRUfL4i0qN7lz6cXXudBqKKSJ/uFLwnoeYLJSK9TjJBJKRnfBHpV/p+nM76LSMSOia+//vFKtVkkdSSRVLLkEhTFO26KzLLZIAruewteoZE3uTxZjYi95yY9pOVQC33nCPtzm49L9t0gDVwD/wIm92aGtiSbuzW0x2ZmnZJ30w0jhG3Pwzk5OT85RcPNZ5R9b0T2AAAAABJRU5ErkJggg==", 25, 25, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmElEQVRoge2aQU7DMBBFXe5A1ZbjdFmOwDEKHKBcqxyAwoYuegeWpIsigR6LTFEUUsd2bMeLeZtG7XjynyZSLLnGKIoSBHALbIEj41NRZ1n5SjyNHNzGxmcSACdgDcxDJhoTYA7cSyZwmQzwLMXrDBm9AB4k29aluJLiWYZsXgAzyfbpUgxAhlxBXMp3NUaYFKhIaahIaaiIK8AUmKa+T9eNo71HgGvgHTjE2uo454sl0pA4E0Umq4g8TntptW9dD3rMsom0JnGQ/VH7u+DJZBHpkrD8FiSTXMQmYanxlkkq4iJhqfWSSSbiI2FZ4yyTRCREwrLWSSa6yBAJS49emagiMSQsvawy0URiSlh6XpSJKbKTksFv6Vbf5m7gxTdfyO732xjzZoxZTiaTj4D1nUivpfT+GdzQeXQjEXMiRaIipaEipaEipaEipdElUhlTH3dlztILcCOX/w56ukR28nmXLFE450yvvZXASrYzJ+ozu0XabP0AC+AR+JJsbsfUwIZycTuebsisqA/pq57GOQj7w4CiKH/8AsZ6fyLuCG4tAAAAAElFTkSuQmCC", 25, 25, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABoUlEQVRoge2aTU4CQRBGe7yDBvA4LvEIHgP1AHgtTNyY+LfRhXdg6bjAhXkupjQkIjPVVFUT098GFs3X76XpCUxPSjU1NVkBToEF8E75tHQsU63EVWHwbZlrVgJgBcyAcc6KWgYYA+fCBENWBriWwbMARlWAC2FbDBncyuBRAJsqwEjY3oYMBiCAKyt/8R2UgPFIFckNcATcAjfeE7ntEZF4kSnuMjuG8XmJAIfAs9S/5l4Vi4pYSaj4rEUsJVR8liLWEio+KxEPCRWfhYiXhIpvVxFPCRXfLiLeEiq+XJEICRVfjkiUhIpPKxIpsY3P40dj49Cpj9FXy+1/fonN7iJT6vJrLhMiIp93lQkTkQ43mVAR6XGRCReRLnOZIiLSZypTTEQ6zWSKikiviUxxEelevx10n9mxkS/0Bl3TNMuU0klK6Sml9Ok6meeKWGQvVsQz/1qkTak77gpm6Q1wLG9/HfRsEnmQ1zM3ovx8Mz32jgSmsp9WdGd2E1+2/gAT4BL4ELZhx9TAnP3NsOPpNZkp3SF921MckbwHBmpqan7yBS9UFFjFcFgCAAAAAElFTkSuQmCC", 25, 25, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRoge2aMU7DQBBF19wBlITjUJojcIwABwjXCgUlCQ0U3IESUwQJ6VF4QEgk2LM7s2uh/U1SrH/ey9qO7U0INTU1UQHOgTXwRvl09CytVuKmMPhfWWlmAmAHLIF5zIxaBpgDl8IEY2YGuJXBywyMqgBXwrYeM7iTwbMMbKoAM2F7HTMYgAxcUTnEd1QCxiNVZF+AO2ALnFj2xsJEHyPAvWz+5CUzmi9R5Bh4lIpnj9+gLCKyvatMNhHpcJPJKiI9LjLZRaTLXKaIiPSZyhQTkU4zmaIi0msiU1xEupNlJiEi/UkykxGRz4iWOcQ3latf+y+uwK6luhOdxK6VKqHiy3j6jXomUFTESkLFZy1iKaHisxSxllDxWYl4SKj4LES8JFR8qSKeEiq+FBFvCRVfoshGNs/+OMj6WusjhPAQQjhrmubFuFsXy9OvR3LNSLH8a5EuhH65KzPLYIBTeftroWefyEZeL9yI4vPFtB0cCbRyPO3o1+wWvmzDARbANfAubOOWqYEV08245ekfMi39In03UJwjcX8YqKmp+c4naGEVXxOFxssAAAAASUVORK5CYII", 25, 25, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_shift'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRoge2Zu0oDQRRAg1j5wE6SKCIWsRHSi38QP8HPiPoB8Vv8BCujxRrwVduIiFhEECzcFLE6FrmBuLhm987MZpF7ms087sy5mewmmalUDMMwjDIC7ANdYEDxxDJ3yzWJkxnIp9FxWQmAIdAGak7vis6hBhyKA2hWBriQ4HYAx7wuR+LS1QTHElwN4JbXpSoun5pgAAJ4qZjmM1ekTEgskbJhiZQNS6RsWCJlwxKZBGgCp0DTx3heyfpbC9gG3qT7O7AzSx9VINAA+tL1Q659oKE2dvBRBQIbwLN0OwdWgDMpvwJbTuY5fVSBwDrwJF16wJLULwCXUv8CbDr6Z/JRBQKrwIM0XwPLifZFIJL2Rzz9RQ6RyA0/iRLtvUT7rYP/VJ8xmsfvIFHeS5R3E+VYMYc/sizlb33UHwFHH/tmLxv/JpF5H4OEuCfy4roiVyn1UUp98YR6+mhxeWrFMkDhm9dJgDV5mbpl+lcid3I98GakZ+xwnzsSaMlqDhnthtf9umVyqAPHwJe46A58gA7lQXfQM5FMi9HxVzxlohD4OXozDMMwQvEN07MRdEGkTaIAAAAASUVORK5CYII=", 35, 35, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tc_space'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("espaço");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};