#!/usr/bin/env ruby
# I got tired of checking my daughter's homework the long way, so I wrote this command line script to do it for me.
# since it was written it only made sense to add a fun description printout for it. (works in ruby 1.9.x and 2.1.x)
# unfortunately I didn't get any "cool dad" points on this one.
#override String for some color from Ivan Black @ S.O. : http://stackoverflow.com/questions/1489183/colorized-ruby-output
class String
def green;          "\033[32m#{self}\033[0m" end
def blue;           "\033[34m#{self}\033[0m" end
def bold;           "\033[1m#{self}\033[22m" end
def red;            "\033[31m#{self}\033[0m" end
end
def draw_shape
  # :/ should make this a bit more sexy
  puts "      *"
  puts "      *  *"
  puts "      *    *"
  puts "  b".green + "   *      *    " + "c (hypotenuse)".green
  puts "(leg)".green + " *        *"
  puts "      *          *"
  puts "      * * * * * * **"
  puts "          a (leg)".green
end

#this solution requires the hypotenuse (if sent in as a measurement parameter) MUST be last.
unless ARGV[2]
  puts "\n\n"
	puts "#{draw_shape}\n**this program will find the appropriate side of a right triangle using the pythagorean theorum".blue
  puts "(a^2 + b^2 = c^2)\nprovide 3 parameters to the command:\n".blue + " $ ruby find_side.rb <side_to_find(a,b or c)> <side_measure1> <side_measure2>"
  puts "TEST: find for c (hypotenuse) on a right triangle with leg of 3 and leg of 4 should reveal 5".blue
  puts "NOTE: The hypotenuse, if being used as a known measure, MUST be the last parameter\n".blue.bold + " $ruby find_side.rb b 3 5 -> 4.0"
	exit
end

def find_c
  # a^2 + b^2 = c^2
	a2 = ARGV[1].to_f ** 2
	b2 = ARGV[2].to_f ** 2
	c2 = a2 + b2
	c = Math.sqrt(c2)
	puts c
end

def find_other_side
  #c^2 - a^2 = b^2
  # c val is always last param
	a2 = ARGV[1].to_f ** 2
	b2 = ARGV[2].to_f ** 2
	os2 = b2 - a2
	os = Math.sqrt(os2)
	puts os
end

def find_a
  find_b
end

if ARGV[0] == 'c' 
  find_c
elsif ARGV[0] == 'b'
  find_other_side
elsif ARGV[0] == 'a'
  find_other_side
else
  puts ARGV[0] + " is not a side that we have a formula for".red
end