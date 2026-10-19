@tool
class_name ProficiencyLabel
extends Control

# TODO: Move somewhere else
## What kind of proficiency bonus to add
enum ProficiencyKind {
	## Creature has no profiency bonus
	INEPT,
	## Creature adds half their proficiency bonus
	NOVICE,
	## Creature adds their whole proficiency bonus
	PROFICIENT,
	## Creature adds their proficiency bonus twice
	EXPERT
}

var color_per_kind: Dictionary[ProficiencyKind, Color] = {
	ProficiencyKind.INEPT:			Color(0.5, 0.5, 0.5, 1.0),
	ProficiencyKind.NOVICE:			Color(0.871, 0.88, 0.598, 1.0),
	ProficiencyKind.PROFICIENT:		Color(0.655, 0.88, 0.598, 1.0),
	ProficiencyKind.EXPERT:			Color(0.598, 0.81, 0.88, 1.0),
}

var text_per_kind: Dictionary[ProficiencyKind, String] = {
	ProficiencyKind.INEPT:			"I",
	ProficiencyKind.NOVICE:			"N",
	ProficiencyKind.PROFICIENT:		"P",
	ProficiencyKind.EXPERT:			"E",
}

@export var kind: ProficiencyKind = ProficiencyKind.INEPT:
	set(new_kind):
		kind = new_kind
		%Label.text = text_per_kind[kind]
		%Label.self_modulate = color_per_kind[kind]

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

func _on_label_minimum_size_changed() -> void:
	custom_minimum_size = $Label.get_minimum_size()
