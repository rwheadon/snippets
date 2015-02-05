#!/usr/bin/env ruby
usageNotes="\n\nUsage: \nfindnonasciilines.rb <the_file_name>\n\n\n"
if ARGV.length == 0 || ARGV[0]=="--help"
  puts usageNotes
  exit 0
end
the_file = ARGV[0]

def is_ascii(str)
    str.each_byte {|c| return false if c>=129}
    true
end

file = File.new(the_file)
counter = 1
while (line = file.gets)

#if the line contains nonascii then we print the line number
	if not is_ascii( line ) 
    # puts "#{counter}: #{line}"
		puts "#{counter}"
	end	
    counter = counter + 1
end
puts "======================================="
file.close