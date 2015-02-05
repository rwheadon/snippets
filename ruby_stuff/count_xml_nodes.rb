#!/usr/bin/env ruby
require 'rexml/document'
include REXML
usageNotes="\n\nUsage: \ncount_xml_nodes.rb <the_file_name> <the_node_to_accumulate_count_on>\nNOTE:The xml document must be well formed and valid\n\n\n"
if ARGV.length == 0 || ARGV[0]=="--help"
  puts usageNotes
  exit 0
end
the_file = ARGV[0]
the_xml_node = ARGV[1]
puts "counting #{the_xml_node} nodes in #{the_file}"
file = File.new(the_file)
doc = Document.new(file)
puts doc.elements.to_a( the_xml_node ).length