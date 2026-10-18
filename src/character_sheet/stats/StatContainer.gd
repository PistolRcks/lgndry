@tool
extends PanelContainer

## Name of the stat.
@export var stat_name: String = "Stat Name":
	set(new_name):
		stat_name = new_name
		%NameLabel.text = stat_name

## Final value of the stat, after calculations.
@export var value: int = 2:
	set(new_value):
		value = new_value
		
		# add "+" if positive
		# ("-" is already placed, 0 should have no symbol)
		var symbol = ""
		var value_sign = sign(value)
		if value_sign == 1:
			symbol = "+"
			
		%ValueLabel.text = "%s%s" % [symbol, value]

## Proficiency for this stat
@export var proficiency: ProficiencyLabel.ProficiencyKind = ProficiencyLabel.ProficiencyKind.INEPT:
	set(new_proficiency):
		proficiency = new_proficiency
		%ProficiencyLabel.kind = proficiency

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass
