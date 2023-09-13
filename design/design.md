# Overview
## The Idea
A homebrew writer should be able to simply write new homebrew via JSON to which players can simply refer through the automatically-generated tooltips. In essence, there should be minimal friction between player and writer/GM.

## File Structure
Essentially, all of the different items of a certain type should be within their own JSON files. For example, all of the character classes might be in a `classes.json` file, all the weapons might be in a `weapons.json` file, etc. All of these files should be in a `data` folder adjacent to the executable.

## Referring to Specific Features/Items
In order to automatically generate links and tooltips, the user can utilize square brackets (using `\[` and `\]` to escape square brackets) when referring to the specific feature or item. Use colons (`:`) to refer to subitems or subfeatures.

For example, let's say we have a "Puncher" class with a "Punching Bag" subclass with a 13th level feature called "Indefatigable." The "square brackets notation" of referring to the feature would be `[classes:puncher:punching_bag:indefatigable]`, assuming the `classes.json` structure of:

```json
{
	"classes" : {
		"puncher" : {
			"name" : "Puncher"
			"hit_die" : "d12",
			"features" : {
				...
			},
			"subclasses" : {
				"punching_bag" : {
					"features" : {
						...,
						"indefatigable" : {
							"name" : "Indefatigable"
							"level_req" : 13,
							"description" : "Your prowess of punching-bag-itude has increased to such a level that you no longer gain [keywords:exhaustion] due to being punched for longer than 8 hours."
						}
					}
				}
			}
		}
	}
}

```

The "square brackets notation" uses the JSON keys as references. The first item in the square brackets must be the specific group (which should be the same as the name of the file from which it comes).

# Specific Structures
## General
- `name` : The actual name of the feature or item
- `description` : A description of what the feature or item does
- `prereqs` : An array of any string features you must have in order to utilize or learn the feature or item. Use square brackets notation to describe prerequisites.
```
TODO: Add in more stuff here...
```

## Features
```
TODO: Add in more stuff here...
```

## Keywords
```
TODO: Add in more stuff here...
```

## Classes
```
TODO: Add in more stuff here...
```

## Spells
```
TODO: Add in more stuff here...
```

## Items
```
TODO: Add in more stuff here...
```

## Item Tags
```
TODO: Add in more stuff here...
```