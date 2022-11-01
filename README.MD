# NodeVar
Run Commands with values extracted from package.json

## Variables
- {project}: name in package.json   
- {version}: version from package.json
- {author}: author from package.json


| Variable  | Description               |
|:----------|:--------------------------|
| {project} | name in package.json      |
| {version} | version from package.json |
| {author}  | author from package.json  |
|           |                           |

## Example:
````
$ nodevar echo {project} {version} {author}
                      _                                 
  _ __     ___     __| |   ___  __   __   __ _   _ __   
 | '_ \   / _ \   / _` |  / _ \ \ \ / /  / _` | | '__|  
 | | | | | (_) | | (_| | |  __/  \ V /  | (_| | | |     
 |_| |_|  \___/   \__,_|  \___|   \_/    \__,_| |_|     
                                                        
run commands with package.json variables                
                                                        
project: 'npmvar'                                       
version: '1.0.0'                                        
author:  'Maxdola <Max Hardtke>'                        
                                                        
raw command:     echo {project} {version} {author}      
parsed command:  echo npmvar 1.0.0 Maxdola <Max Hardtke>

npmvar 1.0.0 Maxdola <Max Hardtke>

process exited with code 0 (7ms)
````
