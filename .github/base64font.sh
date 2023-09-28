#!/bin/bash

# Define the path to the input SCSS file and the output file
INPUT_FILE="src/fragments/_02a-font-faces.scss"
OUTPUT_FILE="src/fragments/_02a-font-faces.scss.next"

# Create/clear the output file
> $OUTPUT_FILE

# Process each line
while IFS= read -r line
do
  # Check if the line contains a [BASE64_STRING_HERE:path_to_file] pattern
  if [[ $line =~ \[BASE64_STRING_HERE:(.+)\] ]]; then
    # Extract the path from the match
    font_path="${BASH_REMATCH[1]}"
    # Base64 encode the font file
    encoded=$(gbase64 "$font_path" | tr -d '\n')
    # Replace the placeholder with the Base64 encoded string
    line=${line/\[BASE64_STRING_HERE:$font_path\]/$encoded}
  fi

  # Append the processed line to the output file
  echo "$line" >> $OUTPUT_FILE
done < "$INPUT_FILE"
