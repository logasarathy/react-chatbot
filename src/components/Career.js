import moment from "moment";

export const Career = (text) => {
  if (text.includes("higherstudies")) {
    return (
      <div>
        <h3>Suggestions for Higher Studies</h3>
        <ul>
          <li>Master of Science (M.Sc. or M.S.)</li>
          <li>Top Universities for MS/ MSc</li>
          <li>Master of Technology (MTech)</li>
          <li>Top Universities for MTech</li>
          <li>Master of Business Administration (MBA)</li>
          <li>Top Universities for MBA</li>
          <li>Post Graduate Diploma in Management (PGDM)</li>
          <li>Top Universities for PGDM</li>
        </ul>
      </div>
    );
  } else if (text.includes("12th")) {
    return (
      <div>
        <div>1. Engineering</div>
        <div>2. Medical</div>
        <div>3. Commerce</div>
        <div>4. Arts</div>
        <div>5. Law</div>
        <div>6. Management</div>
        <div>7. Design</div>
        <div>8. Hotel Management</div>
        <div>9. Animation</div>
      </div>
    );
  } else if (text.includes("teachings")) {
    return (
      <div>
        <p>
          1. The state government, through its latest draft notification on
          appointment of schoolteachers for classes 6-8, has allowed engineering
          graduates to apply for posts of graduate primary teacher.
        </p>
        <p>
          2. If a candidate is a graduate, they can opt for a 2-year B. Ed
          course. After completing the course, they can either apply directly to
          private schools or wait for government school vacancies. To be
          eligible to apply to government schools, candidates will have to crack
          the CTET exam.
        </p>
      </div>
    );
  } else if (text.includes("freelancer")) {
    return (
      <div>
        <ul>
          <li>Media buyer</li>
          <li>Public relations manager</li>
          <li>Business consultant</li>
          <li>Cybersecurity developer</li>
          <li>Financial consultant</li>
          <li>AI professional</li>
          <li>Blockchain developer</li>
          <li>Videographer</li>
          <li>Data analyst</li>
          <li>Photographer</li>
          <li>Technical writer</li>
          <li>Copywriter</li>
          <li>Project manager</li>
          <li>Digital marketing consultant</li>
          <li>Editor</li>
          <li>User experience designer</li>
          <li>Mobile app developer</li>
          <li>SEO specialist</li>
          <li>Social media manager</li>
          <li>Accountant</li>
          <li>IT support specialist</li>
          <li>Web designer</li>
          <li>Web developer</li>
          <li>Programmer</li>
          <li>Virtual assistant</li>
        </ul>
      </div>
    );
  } else if (text.includes("competitive exams")) {
    return (
      <div>
        From sources across the web
        <ul>
          <li>SSC</li>
          <li>UPSC</li>
          <li>Defence exams</li>
          <li>Indian Economic Service Examination</li>
          <li>Civil Services Examination</li>
          <li>National Defence Academy & Naval Academy Examination</li>
          <li>IBPS PO</li>
          <li>Railway Recruitment Board Exam (RRB)</li>
          <li>RBI Grade B Officer</li>
          <li>Banking exams</li>
          <li>Combined Medical Services Examination</li>
          <li>LIC AAO</li>
          <li>JIPMER MD/MS</li>
          <li>SBI PO</li>
          <li>AFCAT</li>
          <li>CAT</li>
          <li>CTET</li>
          <li>Indian Railways examination</li>
          <li>SSC Combined Graduate Level Exams</li>
          <li>XAT</li>
          <li>Engineering Services Examination</li>
          <li>Entrance exams in India</li>
          <li>GRE</li>
          <li>IBPS Clerk</li>
        </ul>
      </div>
    );
  } else if (text.includes("defence sectors")) {
    return (
      <div>
        <p>From sources across the web:</p>
        <ul>
          <li>Combined Defence Services (CDS) Exam</li>
          <li>Indian Air Force Common Admission Test (AFCAT)</li>
          <li>Indian Navy Entrance Test (INET)</li>
          <li>Indian Coast Guard Assistant Commandant Exam</li>
          <li>Central Armed Police Forces (CAPF) Exam</li>
          <li>Indian Army NCC Special Entry Scheme</li>
        </ul>
      </div>
    );
  } else if (text.includes("research and development")) {
    return (
      <div>
        From sources across the web:
        <ul>
          <li>Prototype Manufacturing Executive</li>
          <li>Manager PLM (Product Lifecycle Management)</li>
          <li>Prototyping Engineer</li>
          <li>Product Testing Technician</li>
          <li>Product Testing and Validation Manager</li>
          <li>New Product Development Engineer</li>
        </ul>
      </div>
    );
  } else if (text.includes("influencer")) {
    return (
      <div>
        <p>
          From sources across the web, influencers create content that has the
          power to affect the purchasing decisions of others due to the
          creator’s authority, knowledge, position or relationship with their
          audience. They exist across many industries, including fashion,
          beauty, fitness, travel, tech and more.
        </p>
        <p>
          Influencers come in various sizes, such as nano-influencers (1k–10k
          followers), micro-influencers (10k–100k followers), mid-tier
          influencers (50k-500k), macro-influencers (500k–1 million followers),
          and mega-influencers (over 1 million followers).
        </p>
        <ul>
          <li>Find your niche.</li>
          <li>Choose your platform.</li>
          <li>Create a content strategy.</li>
          <li>Distribute your content.</li>
          <li>Start a website.</li>
          <li>Stay updated.</li>
          <li>Be yourself.</li>
          <li>Engage with your audience.</li>
          <li>Network with other influencers.</li>
          <li>Create a media kit and pitch yourself to brands.</li>
          <li>Be consistent.</li>
          <li>Track your progress.</li>
        </ul>
      </div>
    );
  } else if (text.includes("digital marketing")) {
    return (
      <div>
        <ul>
          <li>
            Search engine optimization (SEO) and search engine marketing (SEM)
          </li>
          <li>Marketing analytics</li>
          <li>Social Media Marketing and Advertising</li>
          <li>Enroll in a digital marketing bootcamp</li>
          <li>Gather projects together into a professional portfolio</li>
          <li>Develop and demonstrate transferable skills</li>
          <li>
            Create a tailored resume and start networking at events and online
          </li>
          <li>Email marketing</li>
          <li>Customer Relationship Management (CRM)</li>
        </ul>
      </div>
    );
  } else if (text.includes("entrepreneur")) {
    return (
      <div>
        <ul>
          <li>Identify profitable startup ideas.</li>
          <li>Find and focus on a growing category (or categories).</li>
          <li>Fill an underserved demand.</li>
          <li>Make something better (or cheaper) than what’s out there.</li>
          <li>Network with other entrepreneurs.</li>
          <li>Research patent applications.</li>
          <li>Have a brainstorming session.</li>
          <li>Pursue a niche you're passionate about.</li>
          <li>Surround yourself with mentors.</li>
        </ul>
      </div>
    );
  } else if (text.includes("trader")) {
    return (
      <div>
        <ul>
          <li>Arrange Sufficient Capital</li>
          <li>Understand the Markets</li>
          <li>Understand Securities</li>
          <li>Understand Policies</li>
          <li>Set up a Trading Strategy</li>
          <li>Integrate Strategy and Plan</li>
          <li>Practice Money Management</li>
          <li>Research Brokerage Charges</li>
          <li>Start Small and Then Expand</li>
          <li>Update Social News and Knowledge</li>
        </ul>
      </div>
    );
  } else if (text.includes("exporter")) {
    return (
      <div>
        <ul>
          <li>You must have a valid business operation</li>
          <li>Obtaining a Permanent Account Number (PAN)</li>
          <li>Obtaining an IEC (Importer-Exporter Code) Number</li>
          <li>Registration and membership certificate (RCMC)</li>
          <li>Pricing and Sampling</li>
          <li>Know about the payment risks</li>
        </ul>
      </div>
    );
  } else if (text.includes("bachelor")) {
    return (
      <div>
        <div>1. Higher Studies</div>
        <div>2. Teaching</div>
        <div>3. Freelancer</div>
        <div>4. Competitive Exams</div>
        <div>5. Defence Sectors</div>
        <div>6. Research and Development</div>
        <div>7. Event Organizer</div>
        <div>8. Influencer</div>
        <div>9. Digital Marketing</div>
        <div>10. Entrepreneur</div>
        <div>11. Trade</div>
        <div>12. Exporter</div>
      </div>
    );
  }
};
