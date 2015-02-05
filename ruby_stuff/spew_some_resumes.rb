#!/usr/bin/env ruby
require 'rubygems'
require 'rbconfig'
require 'linguistics'
Linguistics::use( :en ) # extends Array, String, and Numeric

# Program to generate a whole bunch of Resumes
# usage isn't terribly friendly, but neither is blasting a ton of 
# bogus resumes onto your hard disk
# :: This program was used to test a resume slurper that was used to age, rank and post resumes to bullhorn ::
usageNotes="\n\nUsage: \nspew_some_resumes.rb <the_number_of_resumes> [<include_email_yes-no> <the_file_name> <the_file_path>]\nNOTE:Make sure you have enough disk space for your resumes.\n"
if ARGV.length < 1 || ARGV[0]=="--help"
	puts usageNotes
	exit 0
end

#=============THE SPECIAL CLASSES==========================
class Object  
  def boolean? 
    # self.is_a?(TrueClass) || self.is_a?(FalseClass)  
    return true if self== true || self =~ (/(true|t|yes|y|1)$/i)
    return true if self== false || self.nil? || self =~ (/(false|f|no|n|0)$/i)
    return false
  end
  def cast_bool
    return true if self== true || self =~ (/(true|t|yes|y|1)$/i)
    return false 
  end 
end
#===========================================================

number_of_resumes_to_create= ARGV[0].to_i
key_length=12
fname="TestUser"
lname="Cantronelli"

unique_batch_segment=(36**(key_length-1) + rand(36**key_length)).to_s(36)

the_domain = "my-"+unique_batch_segment+".com" 
include_email = ARGV[1].boolean? ? ARGV[1] : false
puts "Create email is:"+include_email.to_s
the_file_name = (ARGV[2].nil? || ARGV[2].empty?) ? "test_text_file" : ARGV[2]
the_extension = ".txt"
the_slash = is_windows = !((RbConfig::CONFIG['host_os'] =~ /mswin|mingw/).nil?) ? "\\" : "/"
the_file_path = ARGV[3].nil? || ARGV[3].empty? ? "" : ARGV[3] + the_slash

puts "We will create " + number_of_resumes_to_create.to_s + " resumes."
the_counter=0
while the_counter < number_of_resumes_to_create
  the_counter = the_counter+1
  counterWord=(the_counter.en.numwords(:and => "").gsub(/[^a-zA-Z 0-9]/, "")).gsub(/\s+/, "")
  the_file_name_string = the_file_name + "_" + unique_batch_segment + "_" + the_counter.to_s + ".txt "
  the_email_address = ""
  if include_email.cast_bool
    # Change the filename and emailaddress construction
    the_email_address=lname+"."+fname+the_counter.to_s+"@"+the_domain
    the_file_name_string = the_file_name + "_" + the_email_address + ".txt "
  end
  fileOut = File.new(the_file_path+the_file_name_string, "w+")
  fileOut << fname + counterWord + " "+lname+"\n115 Perimeter Center Pl. NE\nSuite 250tu\nAtlanta, GA 30346\nPhone:770.730.6289"
  if include_email.cast_bool
    # Add the emailaddress
    fileOut << "\nemail: " + fname+counterWord + "." + lname + "@" + the_domain
  end 
  fileOut << "\n\nExperience:\nMatrix Resources, Inc - Atlanta\nI was a model employee with little or no support need and tons of usable knowledge. Daily activity includes saving the world, ending hunger and making my boss laugh."
  fileOut << "
  Senior IBM/Lotus Notes Consultant

  Education / Work History:
  Matx Resources, Inc. August 2004 to present. ,Internal Notes Developer. Principal Certified R4/ R5/ R6 Developer & Certified R4/R5/R6 Domino System Administrator.

  COG , July 2001 to August 2004 ,Internal Notes Developer and Administrator. PC Support, Network Support, NAS, Cisco deployment.

  Whittman-Hart/MarchFIRST , September 1999 to April 2001 - Dual Principal CLP certified in Lotus Notes 4.x & 5.x/ Principal certified Application developer in Notes R5. Experience includes High end database workflow and customizations for large deployments in enterprise settings. I am fluent in the Notes formula language and LotusScript. I have provided Domino e-commerce solutions leveraging HTML and JavaScript programming.

  Universal Data Consultants / GE Capital - August 1996 to September 1999 - Dual Principal CLP certified in Lotus Notes 4.x / Principal certified Application developer in Notes R5. Experience includes High end database workflow and customizations for large deployments in enterprise settings. I am fluent in the Notes formula language and LotusScript. I have provided Domino e-commerce solutions leveraging HTML and JavaScript programming. 

  Ed Voyles Acura. ,1987-96..  Master Technician, certified ( NSX, SLX, RL, TL ) Performed detailed troubleshooting and repair of electrical systems involving multiplexing and on board computers. I also specialized in driveability troubleshooting. 

  Dekalb College ,1990-91- Mathematics / Chemistry continued education.

  Freed-Hardeman University ,'82-85 - Major in Bible and Graphic Design.

  Experience and Achievements:
  Principal Certified Lotus Professional Application Developer (PCLP).  I have obtained the Principal Lotus CLP certification in Notes 4x and R5 by completing necessary requirements and passing Application Development I & II, Advanced programming in LotusScript, Developing Domino Applications for the Web, and the R5 application development update.  
  
  "
  fileOut << "\n\nSkills:\nI know Java, PERL, Groovy, Ruby, HTML, JavaScript, LotusScript, Jekyll, Drupal, Joomla, Tomcat, Glassfish, Windows, Linux, Apple OS, DB2, Oracle, MySQL"
  fileOut << "\n\nReferences available upon request"
  fileOut.close()
end

# open('myfile.txt', 'w') { |f|
#   f.puts response
# }