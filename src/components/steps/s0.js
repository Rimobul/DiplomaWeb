import React, {Component} from 'react';

export default class S0 extends Component {
    render() {
        return(
            <div>
                <div className="col-md-8">
                    <h1>Welcome!</h1>
                    <h4>This is the perfect tool for selecting mobile multi-platform frameworks.</h4>
                    <hr/>

                    <div className="panel-group">
                        <div className="panel panel-info">
                            <div className="panel-heading">What is this?</div>
                            <div className="panel-body">This web app is a practical implementation of a methodology to
                                choose a mobile multi-platform framework that will suite exactly your needs!
                            </div>
                        </div>
                        <div className="panel panel-danger">
                            <div className="panel-heading">Before you begin</div>
                            <div className="panel-body">
                                <button type="button" className="btn btn-danger" data-toggle="collapse"
                                        data-target="#eliminating-questions">
                                    Is this methodology right for your needs?
                                </button>
                                <div id="eliminating-questions" className="collapse">
                                    <p>
                                        Before proceeding with the methodology itself, several eliminating questions
                                        should
                                        be answered. If the answer is “yes” to one or multiple questions this
                                        methodology 7
                                        may not be useful.
                                    </p>

                                    <ul>
                                        <li>
                                            <strong>Is only one operating system (even with multiple screen sizes)
                                                targeted?</strong>
                                            <small>
                                                If the answer is “yes”, then there is no doubt. Go native. There is
                                                nothing
                                                that beats native development. The world of multi-platform tools is a
                                                world
                                                of compromises. Native development allows you to use the operating
                                                system to
                                                its fullest potential, while not limiting the performance.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Which mobile operating systems do you want to target?</strong>
                                            <small>
                                                This methodology is aimed strictly on mobile OSs. Although some tools
                                                allow
                                                development for desktop computers as well, this possibility is not
                                                discussed
                                                in the methodology. From those featured in the methodology, you might
                                                want
                                                to check out Qt, Embarcadero, Kivy, RubyMotion or Xamarin.
                                                <br/>
                                                The key operating systems for this methodology are Android and iOS.
                                                Attention is paid also to Windows support (namely Windows 10 UWP and
                                                Windows
                                                8.1 WinRT). Tools enabling development for BlackBerry are examined for
                                                their
                                                full support. However, should you want to focus on different mobile
                                                operating systems (like Symbian, Bada or others), this methodology and
                                                the
                                                suggested results may not be suitable for your use case.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Will the individual applications differ significantly on each
                                                operating
                                                system?</strong>
                                            <small>
                                                This is an important consideration. If the design and functionality for
                                                each
                                                OS is significantly different, a multi-platform tool is useless. There
                                                are
                                                tools that allow large platform-specific customizations, but if the
                                                common
                                                code should drop below 50%, native development is recommended. Even
                                                then,
                                                the common functionality can be extracted into a C++ library, or be
                                                invoked
                                                from the server backend.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Will there be a large amount of native API, sensors or
                                                widgets?</strong>
                                            <small>
                                                Another important factor. Not all development tools allow access to all
                                                native APIs or sensors. Even if they do, they might not be available for
                                                all
                                                OSs, or differ radically on each of them [Note: an example of this may
                                                be
                                                something as simple as a slider. While on iOS and Windows the native
                                                slider
                                                allows arbitrary steps, the Android SeekBar is bound to 1000 steps. As a
                                                result, values not divisible by 1000 broke the application, since the
                                                slider
                                                could not find the right position. It took several days to determine the
                                                cause of the issue and write a reliable platform-agnostic solution].
                                                Tools
                                                with active community may have various 3rd party resources, but these
                                                may
                                                complicate the licencing, increase the cost, decrease performance and
                                                violate the security. Adding a large quantity of libraries or plugins
                                                will
                                                increase the size of the application dramatically.
                                                <br/>
                                                Also, many platform-specific features (like Android widgets or Windows
                                                life
                                                tiles) are not present on other OSs, thus certain multi-platform
                                                development
                                                tools ignore altogether. Consider all the pros and cons and examine,
                                                whether
                                                native development will not be better. If you decide to use
                                                multi-platform
                                                frameworks, in the methodology, focus on tools allowing
                                                platform-specific
                                                overrides.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Do you want to create a game?</strong>
                                            <small>
                                                Although some multi-platform development tools studied by this
                                                methodology
                                                allow game development to certain extent, for a fully-fledged 2D or 3D
                                                game
                                                it may not be appropriate. Discussing the differences between individual
                                                game framework is beyond the scope of this work. For starters, try to
                                                look
                                                at Unity 3D, Unreal Development Kit, Marmelade, MoSync or Wave. However,
                                                should you plan creating multiple apps and wish to utilize the invested
                                                learning effort, use the methodology and focus on tools supporting game
                                                development.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Do you want to create a new web app for both desktop and
                                                mobile?</strong>
                                            <small>
                                                If you are creating a web page or web application, that should be
                                                available
                                                both for mobile and desktop environment and you do not intend using
                                                native
                                                APIs or sensors, consider creating a mobile web app. It is just a common
                                                web
                                                page, adjusted for the mobile devices. For starters, try to examine
                                                Bootstrap Mobile, AppPress, Sencha Touch, Dojo or jQuery Mobile.
                                                However,
                                                should you want to use also the sensors or native APIs of a mobile
                                                device,
                                                use this methodology and focus on tools implementing the hybrid
                                                approach.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Do you want to port an existing web page?</strong>
                                            <small>
                                                The instructions are similar to those above. If you do not want to
                                                utilize
                                                native sensors and APIs, look for a mobile web app framework. Otherwise,
                                                use
                                                the methodology and focus on tools hybrid approach.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Do you want to manage and analyze data from an existing database
                                                (AWS,
                                                Azure, Oracle, IBM, SAP, Salesforce...)?</strong>
                                            <small>
                                                This is a textbook example of an MBaaS usage. MBaaS (Mobile Backend as a
                                                Service) providers allow you to create or integrate a mobile application
                                                with a backend server, often adding the support to various social
                                                networks
                                                or online apps. The set of tools used in this methodology contain also
                                                several MBaaS providers. However, those that do not allow creating an
                                                offline mobile app without the connection to the backend servers, are
                                                not
                                                included. Those excluded tools might be more suitable for particular use
                                                cases. After finishing the methodology, try to compare the tools
                                                suggested
                                                by the methodology with some of the following: Anypresence, AppGyver,
                                                Kinvey, MobileFrame, MooFWD.
                                            </small>
                                        </li>
                                        <li>
                                            <strong>Do you want to create a internal business application for your
                                                employees?</strong>
                                            <small>
                                                In this case, you might either utilize an MBaaS provider, or a tool
                                                focused
                                                on particular use-case implementations. The instructions are similar to
                                                those above: follow the methodology. Then, compare the tools suggested
                                                by
                                                the methodology with either pure MBaaS tools (like Anypresence,
                                                AppGyver,
                                                Kinvey, MobileFrame, MooFWD) or with some specialized frameworks (e.g.
                                                Appticles, i-exceed, Pega Systems, Retriever Communications).
                                            </small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-success">
                            Let's start!
                            <span className="glyphicon glyphicon-play"></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="well">
                        Currently there are {0} frameworks in our database.
                    </div>
                </div>
            </div>
        );
    }
}