#!/usr/bin/env ruby
require 'rexml/document'
include REXML
usageNotes="\n\nUsage: \nnodes_replace_xml_node_value.rb <the_file_name> //<the_node_to_accumulate_count_on> <the_new_node_value>\nNOTE:The xml document must be well formed and valid\n\n\n"
if ARGV.length == 0 || ARGV[0]=="--help"
	puts usageNotes
	exit 0
end
the_file = ARGV[0]
the_xml_node = ARGV[1]
the_node_value = ARGV[2]
puts "changing #{the_xml_node} nodes in #{the_file} to #{the_node_value}"
file = File.new(ARGV[0])
doc = Document.new(file)
# doc = Document.new(File.new(ARGV[0]))

fileVar = "xml_modded_#{ARGV[0]}"
fileTick = 0
puts "checking for #{fileVar}"
while File.exists?(fileVar)
  puts "found one, will increment..."
  fileTick = fileTick +1
  fileVar = "#{File.basename(ARGV[0], '.xml')}_#{fileTick}.xml"
  puts "checking for #{fileVar}"
end
puts "Safe file name created... moving on"
fileOut = File.new(fileVar, "w+")
the_node = doc.elements["//#{the_xml_node}"]
matching_elements = doc.elements["//#{the_xml_node}"]

the_indicator = "."
doc.elements.each("//#{the_xml_node}") { |e| 
  e.text = "#{the_node_value}"
}
puts doc.write()
puts "***********************************"
fileOut << doc.write()
puts "\n\nDone, find output in #{fileVar} at #{Time.new()}"

